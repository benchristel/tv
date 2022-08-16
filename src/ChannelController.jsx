// @flow

import type { Channel } from "./Channel"

import * as React from "react"
import { useState } from "react"
import { createChannel } from "./Channel"
import { channel1Videos, channel2Videos } from "./data/shows"

type Props = {|
  children: (Channel) => React.Node,
|}

export function ChannelController(props: Props): React.Node {
  const [channel, setChannel] = useState(channel1)
  return (
    <>
      {props.children(channel)}
      <button onClick={() => setChannel(channel1)}>Channel 1</button>
      <button onClick={() => setChannel(channel2)}>Channel 2</button>
    </>
  )
}

// PROTOTYPE: for now, each episode just has one video in it.
const channel1 = createChannel(channel1Videos.map((v) => ({ videos: [v] })))
const channel2 = createChannel(channel2Videos.map((v) => ({ videos: [v] })))
