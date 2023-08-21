// @flow

import * as channel1 from "./channel1"
import * as channel2 from "./channel2"
import * as channel3 from "./channel3"
import * as channel4 from "./channel4"
import * as channel5 from "./channel5"
import * as channel6 from "./channel6"
import * as channel7 from "./actualPlays"
import * as channel8 from "./channel8"
import * as channelDebug from "./channelDebug";
import * as channelTestSegments from "./channelTestSegments";
import type { Episode } from "../video/types";
import { allEpisodes } from "./parser";

const debug = window.ENVIRONMENT === "development"
export const channels: Array<[string, BroadcastAlgorithm, Array<Episode>]> = [
  ["One", "shuffle", channel1],
  ["Two", "shuffle", channel2],
  ["Three", "shuffle", channel3],
  ["Four", "shuffle", channel4],
  ["Five", "shuffle", channel5],
  ["Six", "loop", channel6],
  ["Seven", "shuffle", channel7],
  ["Eight", "loop", channel8],
  debug ? ["debug", "shuffle", channelDebug] : null,
].filter(Boolean)
  .map(([name, algorithm, module]) => [name, algorithm, allEpisodes(module)])

  export type BroadcastAlgorithm =
    | "shuffle"
    | "test-segment-boundaries"
    | "loop"