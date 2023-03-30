// @flow
import { isEmpty } from "./lib/arrays";
import { cache } from "./lib/cache"
import { cyrb128 } from "./lib/hash"
import { randomIntInRange, sfc32 } from "./lib/random";
import { binarySearch } from "./lib/binarySearch"

import type { Channel } from "./Channel"
import type { Episode, Video } from "./video/types";
import { duration, videoDuration } from "./video/types";
import { SECONDS_BETWEEN_VIDEOS } from "./playback"

export const TIMEZONE_OFFSET = 8 * 3600
const SCHEDULE_GENERATION_PERIOD = 24 * 3600

export function ShuffledChannel(name: string, episodes: Array<Episode>): Channel {
  const getSchedule = cache(1, ScheduleGenerator(episodes))
  let totalDurationCache = null

  return {
    getBroadcast,
    getTotalDuration,
    getName() {
      return name
    },
  }

  function getBroadcast(time) {
    const seconds = time / 1000
    const secondsOfDay =
      (seconds - TIMEZONE_OFFSET) % SCHEDULE_GENERATION_PERIOD
    const dayBoundary = seconds - secondsOfDay
    const schedule = getSchedule(String(dayBoundary))
    const segment = binarySearch(schedule, (seg) => seg.startSecondOfDay <= secondsOfDay)
    if (segment?.type === "video") {
      return {
        type: "video",
        videoId: segment.videoId,
        videoTitle: segment.videoTitle,
        currentTime: secondsOfDay - segment.startSecondOfDay + segment.startSecondOfVideo,
      }
    } else {
      return {
        type: "nothing",
        nextVideoId: segment?.nextVideoId ?? "",
      }
    }
  }

  function getTotalDuration() {
    if (totalDurationCache == null) {
      totalDurationCache = episodes
        .flatMap(videos)
        .map(videoDuration)
        .reduce(add, 0)
    }
    return totalDurationCache
  }
}

type Schedule = Array<
  | {|
      type: "video",
      videoId: string,
      videoTitle: string,
      startSecondOfDay: number,
      startSecondOfVideo: number,
    |}
  | {| type: "nothing", nextVideoId: string, startSecondOfDay: number |}
>

type ScheduleGeneratorFn = (Array<Episode>) => (string) => Schedule

export const ScheduleGenerator: ScheduleGeneratorFn = (episodes: Array<Episode>) => (seed: string) => {
  if (isEmpty(episodes)) {
    return []
  }
  episodes = [...episodes]
  const rng = sfc32(...cyrb128(seed))
  let totalDuration = 0
  let schedule: Schedule = []
  let i = 0
  while (totalDuration < SCHEDULE_GENERATION_PERIOD) {
    if (i === episodes.length) i = 0
    swap(episodes, i, randomIntInRange(i, episodes.length - 1, rng))

    const episode = episodes[i++]

    for (const video of episode.videos) {
      schedule.push(
        {
          type: "nothing",
          startSecondOfDay: totalDuration,
          nextVideoId: video.videoId,
        },
      )
      totalDuration += SECONDS_BETWEEN_VIDEOS

      for (const segment of video.segments) {
        schedule.push({
          type: "video",
          videoId: video.videoId,
          videoTitle: video.title,
          startSecondOfDay: totalDuration,
          startSecondOfVideo: segment.start,
        })
        totalDuration += duration(segment)
      }
    }
  }
  return schedule
}

function swap(array, i, k) {
  const tmp = array[i]
  array[i] = array[k]
  array[k] = tmp
}

function add(a, b) {
  return a + b
}

function videos(episode: Episode): Array<Video> {
  return episode.videos
}
