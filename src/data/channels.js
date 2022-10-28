// @flow
import type { Channel } from "../Channel"

import type { Episode, Video } from "./types"

import { createChannel } from "../Channel"
import { createLoopingChannel } from "../LoopingChannel"
import { campaigns } from "./actualPlays"
import { albums } from "./music"
import {
  channel1Videos,
  channel2Videos,
  channel4Segments,
  channel4Videos,
  channel5Videos,
  channel6Videos,
  debuggingVideos,
  mechaThemeSongs,
} from "./shows"

export const channels: Array<Channel> = [
  createChannel("One", channel1Videos.map(singleVideoEpisode)),
  createChannel("Two", channel2Videos.map(singleVideoEpisode)),
  createChannel("Three", albums),
  createChannel("Four", [
    ...channel4Videos.map(singleVideoEpisode),
    ...channel4Segments,
  ]),
  createChannel("Five", channel5Videos.map(singleVideoEpisode)),
  createLoopingChannel("Six", channel6Videos),
  createChannel("Seven", campaigns),
  createLoopingChannel("Eight", mechaThemeSongs),
]

function singleVideoEpisode(v: Video): Episode {
  return { videos: [v] }
}
