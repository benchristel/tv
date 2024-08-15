import * as React from "react"
import { Channel } from "./Channel"

type Props = {
  channels: Array<Channel>,
  onChannelSelected: (Channel) => unknown,
}

export function ChannelSwitcher(props: Props): React.ReactElement {
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
