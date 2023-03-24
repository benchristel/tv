// @flow
import * as channel1 from "./channel1"
import * as channel2 from "./channel2"
import * as channel3 from "./channel3"
import * as channel4 from "./channel4"
import * as christmas from "./channelChristmas"
import * as channelDebug from "./channelDebug";
import type { ChannelModule } from "./types";

// Set debug to true to enable the debugging channel.
const debug = false;

export const channels: Array<[string, ChannelModule]> = [
  ["Channel 1", channel1],
  ["Channel 2", channel2],
  ["Channel 3", channel3],
  ["Channel 4", channel4],
  ["🎄", christmas],
  debug ? ["debug", channelDebug] : null,
].filter(Boolean)
