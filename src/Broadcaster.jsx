// @flow
import * as React from "react"
import { useState } from "react"
import { useInterval } from "./lib/useInterval"
import type { Channel } from "./Channel"
import type { Broadcast } from "./Broadcast"

type Props = {|
  channel: Channel,
  userRequestedPlayback: boolean,
  children: (Broadcast) => React.Node,
|}

export function Broadcaster(props: Props): React.Node {
  const { channel, children, userRequestedPlayback } = props

  const [now, setNow] = useState(+new Date())

  useInterval(() => setNow(+new Date()), 250)

  return (
    <>
      {children(
        userRequestedPlayback
          ? channel.getBroadcast(now)
          : { type: "nothing", nextVideoId: "" }
      )}
    </>
  )
}
