// @flow
import * as React from "react"
import type { Channel } from "./Channel"

type Props = {|
  channels: Array<Channel>,
  onChannelSelected: (Channel) => mixed,
|}

export function ChannelSwitcher(props: Props): React.Node {
  return (
    <>
      {props.channels.map((ch) => (
        <button key={ch.getName()} onClick={() => props.onChannelSelected(ch)}>
          {ch.getName()}
        </button>
      ))}
    </>
  )
}
