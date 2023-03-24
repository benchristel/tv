// @flow
import type { Channel } from "../Channel"
import { createChannel } from "../Channel"
import type { Episode, Video } from "../ingestion/types"
import { parseEpisodes, parseVideos } from "../ingestion/ingestion"
import * as channel1 from "./channel1"
import * as channel2 from "./channel2"
import * as channel3 from "./channel3"
import * as channel4 from "./channel4"
import * as christmas from "./channelChristmas"
import * as channelDebug from "./channelDebug";

// Set debug to true to enable the debugging channel.
const debug = false;

export const channels: Array<Channel> = [
  createChannel("Channel 1", allEpisodes(channel1)),
  createChannel("Channel 2", allEpisodes(channel2)),
  createChannel("Channel 3", allEpisodes(channel3)),
  createChannel("Channel 4", allEpisodes(channel4)),
  createChannel("🎄", allEpisodes(christmas)),
  debug ? createChannel("debug", allEpisodes(channelDebug)) : null,
].filter(Boolean)

type ChannelModule = {
  videos: string,
  episodes: Array<string>,
  ...
}

function allEpisodes({videos, episodes}: ChannelModule): Array<Episode> {
  return [
    ...parseEpisodes(episodes),
    ...parseVideos(videos).map(singleVideoEpisode),
  ]
}

function singleVideoEpisode(v: Video): Episode {
  return { videos: [v] }
}
