// @flow
import type { Channel } from "./Channel"

import { channels } from "./data/channels"

import * as React from "react"

type Props = {|
  channel: Channel,
  onChannelSelected: (Channel) => mixed,
  children: (Channel) => React.Node,
|}

export function ChannelView(props: Props): React.Node {
  return (
    <>
      {props.children(props.channel)}
      <div style={{ height: 12 }} />
      <div className="controls">
        {channels.map((ch) => (
          <button
            key={ch.getName()}
            onClick={() => props.onChannelSelected(ch)}
          >
            {ch.getName()}
          </button>
        ))}
      </div>
    </>
  )
}
