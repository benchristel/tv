// @flow
import type { Channel } from "./Channel"
import type { PlayerStateCode } from "./youtube/player.jsx"

import * as React from "react"

type Props = {|
  code: PlayerStateCode,
  channel: Channel,
|}

function stateString(code: PlayerStateCode) {
  switch (code) {
    case 2: // PAUSED
      return "paused"
    case 3: // BUFFERING
      return "loading"
    case 5: //CUED
      return "ready"
    default:
      return ""
  }
}

export function PlayerStateView(props: Props): React.Node {
  return props.channel.getName() + " " + stateString(props.code)
}
