// @flow

import { pick } from "./lib/arrays"
import { cache } from "./lib/cache"
import { cyrb128_32 } from "./lib/hash"
import { mulberry32 } from "./lib/random"

import type { Broadcast } from "./Broadcast"
import type { Episode } from "./data/types"

export interface Channel {
  getBroadcast(time: number): Broadcast;
  getName(): string;
}

type Schedule = Array<
  | {|
      type: "video",
      videoId: string,
      videoTitle: string,
      durationSeconds: number,
    |}
  | {| type: "nothing", nextVideoId: string, durationSeconds: number |}
>

export const GAP_SECONDS = 2

export function createChannel(name: string, episodes: Array<Episode>): Channel {
  const getSchedule = cache(1, (seed) => {
    console.debug("seed", seed)
    const rng = mulberry32(cyrb128_32(seed))
    let totalDuration = 0
    let schedule: Schedule = []
    while (totalDuration < 24 * 3600) {
      const episode = pick(episodes, rng())

      for (let i = 0; i < episode.videos.length; i++) {
        const prev = schedule[schedule.length - 1]
        const video = episode.videos[i]
        if (prev?.type === "nothing") {
          prev.nextVideoId = video.videoId
        }
        schedule.push({
          type: "video",
          videoId: video.videoId,
          videoTitle: video.title,
          durationSeconds: video.durationSeconds,
        })
        totalDuration += video.durationSeconds
        schedule.push({
          type: "nothing",
          durationSeconds: GAP_SECONDS,
          nextVideoId: "",
        })
        totalDuration += GAP_SECONDS
      }
    }
    console.debug("channel " + name, schedule)
    return schedule
  })

  return {
    getBroadcast,
    getName() {
      return name
    },
  }

  function getBroadcast(time) {
    const seconds = time / 1000
    const secondsOfDay = (seconds - 8 * 3600) % (24 * 3600)
    const dayBoundary = seconds - secondsOfDay
    const schedule = getSchedule(String(dayBoundary))
    let totalDuration = 0
    let segment
    for (segment of schedule) {
      totalDuration += segment.durationSeconds
      if (totalDuration >= secondsOfDay) {
        if (segment.type === "video") {
          return {
            type: "video",
            videoId: segment.videoId,
            videoTitle: segment.videoTitle,
            currentTime:
              segment.durationSeconds - (totalDuration - secondsOfDay),
          }
        } else {
          return {
            type: "nothing",
            nextVideoId: segment.nextVideoId,
          }
        }
      }
    }
    return { type: "nothing", nextVideoId: "" }
  }
}

function add(a, b) {
  return a + b
}
