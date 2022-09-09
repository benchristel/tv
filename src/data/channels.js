// @flow
import type { Channel } from "../Channel"

import type { Episode, Video } from "./types"

import { createChannel } from "../Channel"
import { createLoopingChannel } from "../LoopingChannel"
import { albums } from "./music"
import {
  channel1Videos,
  channel2Videos,
  channel4Videos,
  channel5Videos,
  channel6Videos,
  debuggingVideos,
} from "./shows"

export const channels: Array<Channel> = [
  createChannel("Channel 1", channel1Videos.map(singleVideoEpisode)),
  createChannel("Channel 2", channel2Videos.map(singleVideoEpisode)),
  createChannel("Channel 3", albums),
  createChannel("Channel 4", channel4Videos.map(singleVideoEpisode)),
  createChannel("Channel 5", channel5Videos.map(singleVideoEpisode)),
  createLoopingChannel("Channel 6", channel6Videos),
]

function singleVideoEpisode(v: Video): Episode {
  return { videos: [v] }
}
