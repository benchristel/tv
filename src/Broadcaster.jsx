// @flow
import * as React from "react"
import { useState } from "react"
import { useInterval } from "./lib/useInterval"
import type { Channel } from "./Channel"
import type { Broadcast } from "./Broadcast"

type Props = {|
  channel: Channel,
  userRequestedPlayback: boolean,
  onUserRequestedPlayback: () => mixed,
  children: (Broadcast) => React.Node,
|}

export function Broadcaster(props: Props): React.Node {
  const { channel, children, onUserRequestedPlayback, userRequestedPlayback } =
    props

  const [now, setNow] = useState(+new Date())

  useInterval(() => setNow(+new Date()), 250)

  return (
    <>
      {!userRequestedPlayback && (
        <button id="start" onClick={onUserRequestedPlayback}>
          ▸ Play
        </button>
      )}
      {children(
        userRequestedPlayback
          ? channel.getBroadcast(now)
          : { type: "nothing", nextVideoId: "" }
      )}
    </>
  )
}
