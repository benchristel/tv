// @flow

import { pick } from "./lib/arrays"
import { cache } from "./lib/cache"
import { cyrb128_32 } from "./lib/hash"
import { mulberry32 } from "./lib/random"

import type { Broadcast } from "./Broadcast"
import type { Episode } from "./data/types"
import { equals, expect, is, test } from "@benchristel/taste"
import { binarySearch } from "./lib/binarySearch"

export interface Channel {
  getBroadcast(time: number): Broadcast;
  getName(): string;
}

type Schedule = Array<
  | {|
      type: "video",
      videoId: string,
      videoTitle: string,
      startAt: number,
    |}
  | {| type: "nothing", nextVideoId: string, startAt: number |}
>

export const GAP_SECONDS = 2
export const SCHEDULE_GENERATION_PERIOD = 24 * 3600
export const TIMEZONE_OFFSET = 8 * 3600

export function createChannel(name: string, episodes: Array<Episode>): Channel {
  const getSchedule = cache(1, ScheduleGenerator(episodes))

  return {
    getBroadcast,
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
    const segment = binarySearch(schedule, (seg) => seg.startAt <= secondsOfDay)
    if (segment == null) return { type: "nothing", nextVideoId: "" }
    if (segment.type === "video") {
      return {
        type: "video",
        videoId: segment.videoId,
        videoTitle: segment.videoTitle,
        currentTime: secondsOfDay - segment.startAt,
      }
    } else {
      return {
        type: "nothing",
        nextVideoId: segment.nextVideoId,
      }
    }
  }
}

const ScheduleGenerator = (episodes: Array<Episode>) => (seed: string) => {
  episodes = [...episodes]
  const rng = mulberry32(cyrb128_32(seed))
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
          startAt: totalDuration,
          nextVideoId: video.videoId,
        },
        {
          type: "video",
          videoId: video.videoId,
          videoTitle: video.title,
          startAt: totalDuration + GAP_SECONDS,
        }
      )
      totalDuration += video.durationSeconds + GAP_SECONDS
    }
  }
  return schedule
}

function swap(array, i, k) {
  const tmp = array[i]
  array[i] = array[k]
  array[k] = tmp
}

function randomIntInRange(low, high, rng) {
  return low + Math.floor(rng() * (high + 1 - low))
}

function add(a, b) {
  return a + b
}

// TESTS =====================================================================

test("randomIntInRange", {
  "when low and high are the same"() {
    expect(randomIntInRange(3, 3, Math.random), is, 3)
  },

  "when low and high are 1 apart"() {
    const results = new Set()
    for (let i = 0; i < 30; i++) {
      results.add(randomIntInRange(0, 1, Math.random))
    }
    expect(results, equals, new Set([0, 1]))
  },
})

test("ScheduleGenerator", {
  "schedules a single 24-hour video"() {
    const episodes = [
      {
        videos: [
          {
            durationSeconds: 3600 * 24,
            videoId: "the-video-id",
            title: "the-title",
          },
        ],
      },
    ]
    const generator = ScheduleGenerator(episodes)
    expect(generator(""), equals, [
      { type: "nothing", startAt: 0, nextVideoId: "the-video-id" },
      {
        type: "video",
        videoId: "the-video-id",
        videoTitle: "the-title",
        startAt: 2,
      },
    ])
  },

  "schedules a 12-hour video twice"() {
    const episodes = [
      {
        videos: [
          {
            durationSeconds: 3600 * 12,
            videoId: "the-video-id",
            title: "the-title",
          },
        ],
      },
    ]
    const generator = ScheduleGenerator(episodes)
    expect(generator(""), equals, [
      { type: "nothing", startAt: 0, nextVideoId: "the-video-id" },
      {
        type: "video",
        videoId: "the-video-id",
        videoTitle: "the-title",
        startAt: 2,
      },
      { type: "nothing", startAt: 43202, nextVideoId: "the-video-id" },
      {
        type: "video",
        videoId: "the-video-id",
        videoTitle: "the-title",
        startAt: 43204,
      },
    ])
  },

  "picks the videos to show randomly"() {
    const episodes = [
      {
        videos: [
          {
            durationSeconds: 3600 * 2,
            videoId: "one",
            title: "",
          },
        ],
      },
      {
        videos: [
          {
            durationSeconds: 3600 * 2,
            videoId: "two",
            title: "",
          },
        ],
      },
      {
        videos: [
          {
            durationSeconds: 3600 * 2,
            videoId: "three",
            title: "",
          },
        ],
      },
    ]
    const generator = ScheduleGenerator(episodes)
    expect(
      generator("asdfx")
        .map((v) => v.videoId)
        .filter(Boolean),
      equals,
      [
        "three",
        "two",
        "one",
        "two",
        "one",
        "three",
        "two",
        "three",
        "one",
        "three",
        "two",
        "one",
      ]
    )
  },
})
