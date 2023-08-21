// @flow

export { ShuffledChannel } from "./ShuffledChannel.impl";

;(ShuffledChannel: (name: string, Array<Episode>) => Channel)

import { ShuffledChannel, ScheduleGenerator, TIMEZONE_OFFSET } from "./ShuffledChannel.impl";
import { range, entireVideo } from "./data/parser";
import { test, expect, is, equals, which } from "@benchristel/taste"
import { episode } from "./video/types";
import type { Segment, Video, Episode } from "./video/types"
import type { Channel } from "./Channel"

function video(...segments: Array<Segment>): Video {
  return {
    videoId: "",
    title: "",
    segments,
  }
}

function isAnything() {
  return true
}

const noEpisodes: Array<Episode> = []

test("a Channel", {
  "broadcasts nothing given no episodes"() {
    const channel = ShuffledChannel("", noEpisodes)
    expect(channel.getBroadcast(999), equals, {type: "nothing", nextVideoId: ""})
  },

  "starts a video when it's supposed to start"() {
    const episodes = [
      episode([
        video(range(1000, 2000)),
      ]),
    ]
    const channel = ShuffledChannel("", episodes)
    const fiveSecondsAfterMidnightPacificTime = (TIMEZONE_OFFSET + 5) * 1000
    expect(
      channel.getBroadcast(fiveSecondsAfterMidnightPacificTime),
      equals,
      // For the first 2 seconds of the day, nothing is playing (due to the
      // gap between videos).
      // At 00:00:05, we are 3 seconds into the first video segment, which
      // starts playing 1000 seconds into the YouTube data.
      {type: "video", currentTime: 1003, videoId: "", videoTitle: ""},
    )
  },

  "has a total duration of 0 given no videos"() {
    const channel = ShuffledChannel("", noEpisodes)
    expect(channel.getTotalDuration(), is, 0)
  },

  "sums the durations of its videos"() {
    const episodes: Array<Episode> = [
      episode([
        video({start: 0, end: 1}),
        video({start: 0, end: 2}),
      ]),
      episode([
        video({start: 0, end: 3}),
      ]),
    ]
    const channel = ShuffledChannel("", episodes)
    expect(channel.getTotalDuration(), is, 6)
  }
})

test("ScheduleGenerator", {
  "schedules a single 24-hour video"() {
    const episodes = [
      episode([
        {...video(entireVideo(3600 * 24)), videoId: "the-video-id"},
      ]),
    ]

    const generator = ScheduleGenerator(episodes)

    expect(generator(""), equals, [
      { type: "nothing", startSecondOfDay: 0, nextVideoId: "the-video-id" },
      {
        type: "video",
        videoId: "the-video-id",
        videoTitle: which(isAnything),
        startSecondOfDay: 2,
        startSecondOfVideo: 0,
      },
    ])
  },

  "schedules a 12-hour video twice"() {
    const episodes = [
      episode([
        {...video(entireVideo(3600 * 12)), videoId: "the-video-id"},
      ]),
    ]

    const generator = ScheduleGenerator(episodes)

    expect(generator(""), equals, [
      { type: "nothing", startSecondOfDay: 0, nextVideoId: "the-video-id" },
      {
        type: "video",
        videoId: "the-video-id",
        videoTitle: which(isAnything),
        startSecondOfDay: 2,
        startSecondOfVideo: 0,
      },
      { type: "nothing", startSecondOfDay: 43202, nextVideoId: "the-video-id" },
      {
        type: "video",
        videoId: "the-video-id",
        videoTitle: which(isAnything),
        startSecondOfDay: 43204,
        startSecondOfVideo: 0,
      },
    ])
  },

  "schedules a time window of a video"() {
    const episodes = [
      episode([
        // 12 hours of video, starting at 1:00:00 and ending at 13:00:00
        {...video(range(3600, 3600 * 13)), videoId: "the-video-id"},
      ])
    ]

    const generator = ScheduleGenerator(episodes)

    expect(generator(""), equals, [
      { type: "nothing", startSecondOfDay: 0, nextVideoId: "the-video-id" },
      {
        type: "video",
        videoId: "the-video-id",
        videoTitle: which(isAnything),
        startSecondOfDay: 2,
        startSecondOfVideo: 3600,
      },
      { type: "nothing", startSecondOfDay: 43202, nextVideoId: "the-video-id" },
      {
        type: "video",
        videoId: "the-video-id",
        videoTitle: which(isAnything),
        startSecondOfDay: 43204,
        startSecondOfVideo: 3600,
      },
    ])
  },

  "picks the videos to show randomly"() {
    const episodes = ["one", "two", "three"].map((videoId) =>
      episode([{...video(entireVideo(3600 * 2)), videoId}]))

    const generator = ScheduleGenerator(episodes)

    expect(
      generator("asdfx")
        .map((v) => v.videoId)
        .filter(Boolean),
      equals,
      [
        "three",
        "one",
        "two",
        "three",
        "two",
        "one",
        "one",
        "two",
        "three",
        "two",
        "three",
        "one"
      ]
    )
  },
})
