import * as React from "react"

// FIXME
// type Props = {|
//   channels: Array<Channel>,
//   onChannelSelected: (Channel) => mixed,
// |}

export function ChannelSwitcher(props/* FIXME : Props */)/* FIXME : React.Node */ {
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
