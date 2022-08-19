// @flow
import type { Channel } from "./Channel"

import * as React from "react"

type Props = {|
  code: -1 | 0 | 1 | 2 | 3 | 5,
  channel: Channel,
|}

function stateString(code: -1 | 0 | 1 | 2 | 3 | 5) {
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
