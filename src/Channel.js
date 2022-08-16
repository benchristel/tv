// @flow

import { pick } from "./lib/arrays"
import { cache } from "./lib/cache"
import { cyrb128_32 } from "./lib/hash"
import { mulberry32 } from "./lib/random"

import type { Broadcast } from "./Broadcast"
import type { Episode } from "./data/types"

export interface Channel {
  getBroadcast(time: number): Broadcast;
}

export function createChannel(episodes: Array<Episode>): Channel {
  const getSchedule = cache(1, (seed) => {
    const rng = mulberry32(cyrb128_32(seed))
    let totalDuration = 0
    let schedule = []
    while (totalDuration < 24 * 3600) {
      const episode = pick(episodes, rng())
      totalDuration += episode.videos
        .map((v) => v.durationSeconds)
        .reduce(add, 0)
      schedule.push(...episode.videos)
    }
    return schedule
  })

  return {
    getBroadcast,
  }

  function getBroadcast(time) {
    const seconds = Math.floor(time / 1000)
    const secondsOfDay = (seconds - 8 * 3600) % (24 * 3600)
    const dayBoundary = seconds - secondsOfDay
    const schedule = getSchedule(String(dayBoundary))
    let totalDuration = 0
    let video
    for (video of schedule) {
      totalDuration += video.durationSeconds
      if (totalDuration >= secondsOfDay) {
        return {
          type: "video",
          videoId: video.videoId,
          currentTime: video.durationSeconds - (totalDuration - secondsOfDay),
        }
      }
    }
    return { type: "video", currentTime: 0, videoId: "" }
  }
}

function add(a, b) {
  return a + b
}
