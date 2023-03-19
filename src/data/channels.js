// @flow
import type { Channel } from "../Channel"

import type { Episode, Video } from "./types"

import { createChannel } from "../Channel"
import { albums } from "./music"
import {
  channel1Episodes,
  channel1Videos,
  channel2Videos,
  channel2Episodes,
  channel4Videos,
  debuggingVideos,
} from "./shows"
import { christmasAlbums, christmasSongs } from "./christmas";

export const channels: Array<Channel> = [
  createChannel("Channel 1", [
    ...channel1Episodes,
    ...channel1Videos.map(singleVideoEpisode),
  ]),
  createChannel("Channel 2", [
    ...channel2Episodes,
    ...channel2Videos.map(singleVideoEpisode),
  ]),
  createChannel("Channel 3", albums),
  createChannel("Channel 4", channel4Videos.map(singleVideoEpisode)),
  createChannel("🎄", [
    ...christmasAlbums,
    ...christmasSongs.map(singleVideoEpisode),
  ]),
]

function singleVideoEpisode(v: Video): Episode {
  return { videos: [v] }
}
