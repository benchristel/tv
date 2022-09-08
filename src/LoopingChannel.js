// @flow
import type { Broadcast } from "./Broadcast"
import type { Channel } from "./Channel"
import type { Episode } from "./data/types"

import { GAP_SECONDS } from "./Channel"
import { equals, expect, is, test, debug } from "@benchristel/taste"

function gap(nextVideoId) {
  return {
    type: "nothing",
    nextVideoId,
  }
}
export function createLoopingChannel(
  name: string,
  episodes: Array<Episode>
): Channel {
  return {
    getBroadcast: (currentMillis): Broadcast => {
      const clockTime = currentMillis / 1000
      let videoDurationSoFar = 0

      for (const episode of episodes) {
        const { videoId, title, durationSeconds } = episode.videos[0]
        if (videoDurationSoFar + GAP_SECONDS > clockTime) return gap(videoId)
        videoDurationSoFar += GAP_SECONDS

        if (videoDurationSoFar + durationSeconds > clockTime) {
          return {
            type: "video",
            currentTime: clockTime - videoDurationSoFar,
            videoId: videoId,
            videoTitle: title,
          }
        }

        videoDurationSoFar += durationSeconds
      }

      console.log("fooo")
      return gap("")
    },
    getName: () => name,
  }
}

test("looping channel", {
  "uses the provided name"() {
    const channel = createLoopingChannel("Jonathan", [])
    expect(channel.getName(), is, "Jonathan")
  },

  "when no videos are provided, plays nothing"() {
    const channel = createLoopingChannel("Jonathan", [])
    expect(channel.getBroadcast(42).type, is, "nothing")
  },

  "plays a first video at the beginning"() {
    const channel = createLoopingChannel("Jonathan", [
      {
        videos: [
          { videoId: "the-id", title: "the-title", durationSeconds: 42 },
        ],
      },
    ])
    expect(channel.getBroadcast(0 + GAP_SECONDS * 1000), equals, {
      type: "video",
      videoId: "the-id",
      currentTime: 0,
      videoTitle: "the-title",
    })
  },

  "plays a video all the way though"() {
    const channel = createLoopingChannel("Jonathan", [
      {
        videos: [
          { videoId: "the-id", title: "the-title", durationSeconds: 42 },
        ],
      },
    ])

    expect(channel.getBroadcast(1000 + GAP_SECONDS * 1000), equals, {
      type: "video",
      videoId: "the-id",
      currentTime: 1,
      videoTitle: "the-title",
    })
  },

  "puts a gap between videos"() {
    const channel = createLoopingChannel("Jonathan", [
      {
        videos: [
          { videoId: "first", title: "The First", durationSeconds: 100 },
        ],
      },
      {
        videos: [
          { videoId: "second", title: "The Second", durationSeconds: 10 },
        ],
      },
    ])
    // |~~|------------------------|~*~|--------------|
    //  2    +    100         +     1
    expect(channel.getBroadcast(103 * 1000), equals, {
      type: "nothing",
      nextVideoId: "second",
    })
  },

  "plays a second episode after the first"() {
    const channel = createLoopingChannel("Jonathan", [
      {
        videos: [{ videoId: "first", title: "The First", durationSeconds: 1 }],
      },
      {
        videos: [
          { videoId: "second", title: "The Second", durationSeconds: 1 },
        ],
      },
    ])

    expect(channel.getBroadcast(2 * GAP_SECONDS * 1000 + 1000), equals, {
      type: "video",
      videoId: "second",
      currentTime: 0,
      videoTitle: "The Second",
    })
  },
})
