// @flow

import type { Channel } from "./Channel"

import * as React from "react"
import { useState } from "react"
import { createChannel } from "./Channel"
import { channel1Videos, channel2Videos } from "./data/shows"
import { albums } from "./data/music"
import type { Episode, Video } from "./data/types"

type Props = {|
  onChange: () => mixed,
  children: (Channel) => React.Node,
|}

export function ChannelController(props: Props): React.Node {
  const [channel, setChannel] = useState(channels[0])
  const changeChannel = (ch) => {
    setChannel(ch)
    props.onChange()
  }
  return (
    <>
      {props.children(channel)}
      <div style={{ height: 12 }} />
      <div className="controls">
        {channels.map((ch) => (
          <button key={ch.getName()} onClick={() => changeChannel(ch)}>
            {ch.getName()}
          </button>
        ))}
      </div>
    </>
  )
}

const channels = [
  // PROTOTYPE: for now, each episode just has one video in it.
  createChannel("Channel 1", channel1Videos.map(singleVideoEpisode)),
  createChannel("Channel 2", channel2Videos.map(singleVideoEpisode)),
  createChannel("Channel 3", albums),
]

function singleVideoEpisode(v: Video): Episode {
  return { videos: [v] }
}
