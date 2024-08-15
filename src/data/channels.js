import * as channel1 from "./channel1"
import * as channel2 from "./channel2"
import * as channel3 from "./channel3"
import * as channel4 from "./channel4"
import * as christmas from "./channelChristmas"
import * as channelDebug from "./channelDebug";
// FIXME
// import type { Episode } from "../video/types";
import { allEpisodes } from "./parser";

const debug = window.ENVIRONMENT === "development"
export const channels/* FIXME : Array<[string, BroadcastAlgorithm, Array<Episode>]> */ = [
  ["Channel 1", "shuffle", channel1],
  ["Channel 2", "shuffle", channel2],
  ["Channel 3", "shuffle", channel3],
  ["Channel 4", "shuffle", channel4],
  ["🎄", "shuffle", christmas],
  debug ? ["debug", "shuffle", channelDebug] : null,
  debug ? ["segments", "test-segment-boundaries", channel1] : null,
].filter(Boolean)
  .map(([name, algorithm, module]) => [name, algorithm, allEpisodes(module)])

// FIXME
// export type BroadcastAlgorithm =
//   | "shuffle"
//   | "test-segment-boundaries"