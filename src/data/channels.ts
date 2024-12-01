import * as channel1 from "./channel1"
import * as channel2 from "./channel2"
import * as channel3 from "./channel3"
import * as channel4 from "./channel4"
import * as christmas from "./channelChristmas"
import * as channelDebug from "./channelDebug";
import * as channelStaging from "./channelStaging";
import type { Episode } from "../video";
import { allEpisodes } from "./parser";
import { ChannelModule } from "./types"

declare global {
  interface Window {
    ENVIRONMENT: string
  }
}

const debug = window.ENVIRONMENT === "development"

const channelData: Array<[string, BroadcastAlgorithm, ChannelModule] | null> = [
  ["Channel 1", "shuffle", channel1],
  ["Channel 2", "shuffle", channel2],
  ["Channel 3", "shuffle", channel3],
  ["Channel 4", "shuffle", channel4],
  ["🎄", "shuffle", christmas],
  debug ? ["🐞", "shuffle", channelDebug] : null,
  debug ? ["✂️", "test-segment-boundaries", channel1] : null,
  debug ? ["🚧", "shuffle", channelStaging] : null,
]

export const channels: Array<[string, BroadcastAlgorithm, Episode[]]>
  = channelData
    .filter(nonNull)
    .map(([name, algorithm, module]) => [name, algorithm, allEpisodes(module)])

function nonNull<T>(x: T | null): x is T {
  return x != null
}

export type BroadcastAlgorithm =
  | "shuffle"
  | "test-segment-boundaries"