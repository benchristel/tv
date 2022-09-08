// @flow

import { pick } from "./lib/arrays"
import { cache } from "./lib/cache"
import { cyrb128_32 } from "./lib/hash"
import { mulberry32 } from "./lib/random"

import type { Broadcast } from "./Broadcast"
import type { Episode } from "./data/types"
import { equals, expect, test } from "@benchristel/taste"
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
    const secondsOfDay = (seconds - 8 * 3600) % (24 * 3600)
    const dayBoundary = seconds - secondsOfDay
    const schedule = getSchedule(String(dayBoundary))
    const timeslot = binarySearch(
      schedule,
      (slot) => slot.startAt <= secondsOfDay
    )

    if (timeslot == null) return { type: "nothing", nextVideoId: "" }

    if (timeslot.type === "video") {
      return {
        type: "video",
        videoId: timeslot.videoId,
        videoTitle: timeslot.videoTitle,
        currentTime: secondsOfDay - timeslot.startAt,
      }
    } else {
      return {
        type: "nothing",
        nextVideoId: timeslot.nextVideoId,
      }
    }
  }
}

const ScheduleGenerator = (episodes: Array<Episode>) => (seed: string) => {
  const rng = mulberry32(cyrb128_32(seed))
  let totalDuration = 0
  let schedule: Schedule = []
  while (totalDuration < 24 * 3600) {
    const episode = pick(episodes, rng())

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

function add(a, b) {
  return a + b
}

// TESTS =====================================================================

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
        "one",
        "three",
        "two",
        "two",
        "three",
        "one",
        "three",
        "two",
        "two",
        "one",
        "one",
      ]
    )
  },
})
