// @flow
import type { Broadcast } from "./Broadcast"
import type { Channel } from "./Channel"
import type { Episode, Video } from "./video/types"
import {videoDuration} from "./video/types"

import { SECONDS_BETWEEN_VIDEOS } from "./playback"
import { equals, expect, is, test } from "@benchristel/taste"

function gap(nextVideoId) {
  return {
    type: "nothing",
    nextVideoId,
  }
}

export function LoopingChannel(
  name: string,
  videos: Array<Video>
): Channel {
  const totalScheduleDuration =
    videos.map((v) => videoDuration(v)).reduce(add, 0) +
    videos.length * SECONDS_BETWEEN_VIDEOS

  return {
    getBroadcast: (currentMillis): Broadcast => {
      const clockTime = currentMillis / 1000
      let videoDurationSoFar = 0

      const runtime = clockTime % totalScheduleDuration

      for (const video of videos) {
        const { videoId, title } = video
        const durationSeconds = videoDuration(video)

        if (videoDurationSoFar + SECONDS_BETWEEN_VIDEOS > runtime) return gap(videoId)
        videoDurationSoFar += SECONDS_BETWEEN_VIDEOS

        if (videoDurationSoFar + durationSeconds > runtime) {
          return {
            type: "video",
            currentTime: runtime - videoDurationSoFar,
            videoId: videoId,
            videoTitle: title,
          }
        }

        videoDurationSoFar += durationSeconds
      }

      return gap("")
    },
    getName: () => name,
    getTotalDuration: () => totalScheduleDuration,
  }
}

const add = (a, b) => a + b

test("looping channel", {
  "plays the first episode after the second"() {
    const channel = LoopingChannel("Jonathan", [
      video("first", "The First", 100),
      video("second", "The Second", 100),
    ])

    expect(
      channel.getBroadcast(250 * 1000),
      equals,
      ({
        videoId: "first",
        videoTitle: "The First",
        currentTime: 44,
        type: "video",
      }: Broadcast)
    )
  },
  "uses the provided name"() {
    const channel = LoopingChannel("Jonathan", [])
    expect(channel.getName(), is, "Jonathan")
  },

  "when no videos are provided, plays nothing"() {
    const channel = LoopingChannel("Jonathan", [])
    expect(channel.getBroadcast(42).type, is, "nothing")
  },

  "plays a first video at the beginning"() {
    const channel = LoopingChannel("Jonathan", [
      video("the-id", "the-title", 42),
    ])
    expect(channel.getBroadcast(0 + SECONDS_BETWEEN_VIDEOS * 1000), equals, {
      type: "video",
      videoId: "the-id",
      currentTime: 0,
      videoTitle: "the-title",
    })
  },

  "plays a video all the way though"() {
    const channel = LoopingChannel("Jonathan", [
      video("the-id", "the-title", 42),
    ])

    expect(channel.getBroadcast(1000 + SECONDS_BETWEEN_VIDEOS * 1000), equals, {
      type: "video",
      videoId: "the-id",
      currentTime: 1,
      videoTitle: "the-title",
    })
  },

  "puts a gap between videos"() {
    const channel = LoopingChannel("Jonathan", [
      video("first", "The First", 100),
      video("second", "The Second", 10),
    ])
    // |~~|------------------------|~*~|--------------|
    //  2    +    100         +     1
    expect(channel.getBroadcast(103 * 1000), equals, {
      type: "nothing",
      nextVideoId: "second",
    })
  },

  "plays a second episode after the first"() {
    const channel = LoopingChannel("Jonathan", [
      video("first", "The First", 1),
      video("second", "The Second", 1),
    ])

    expect(channel.getBroadcast(2 * SECONDS_BETWEEN_VIDEOS * 1000 + 1000), equals, {
      type: "video",
      videoId: "second",
      currentTime: 0,
      videoTitle: "The Second",
    })
  },
})

function video(videoId, title, duration): Video {
  return { videoId, title, segments: [{start: 0, end: duration}] }
}