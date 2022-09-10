// @flow
import type { Channel } from "../Channel"

import type { Episode, Video } from "./types"

import { createChannel } from "../Channel"
import { albums } from "./music"
import {
  channel1Episodes,
  channel1Videos,
  channel2Videos,
  debuggingVideos,
} from "./shows"

export const channels: Array<Channel> = [
  createChannel("Channel 1", [
    ...channel1Episodes,
    ...channel1Videos.map(singleVideoEpisode),
  ]),
  createChannel("Channel 2", channel2Videos.map(singleVideoEpisode)),
  createChannel("Channel 3", albums),
]

function singleVideoEpisode(v: Video): Episode {
  return { videos: [v] }
}
