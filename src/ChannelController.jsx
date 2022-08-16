// @flow

import type { Channel } from "./Channel"

import * as React from "react"
import { createChannel } from "./Channel"
import { videos } from "./data/shows"

type Props = {|
  children: (Channel) => React.Node,
|}

export function ChannelController(props: Props): React.Node {
  return props.children(channel)
}

// PROTOTYPE: for now, each episode just has one video in it.
const episodes = videos.map((v) => ({ videos: [v] }))
const channel = createChannel(episodes)
