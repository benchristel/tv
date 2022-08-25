// @flow
import type { Channel } from "./Channel"

import { channels } from "./data/channels"

import * as React from "react"

type Props = {|
  onChannelSelected: (Channel) => mixed,
|}

export function ChannelView(props: Props): React.Node {
  return (
    <>
      {channels.map((ch) => (
        <button key={ch.getName()} onClick={() => props.onChannelSelected(ch)}>
          {ch.getName()}
        </button>
      ))}
    </>
  )
}
