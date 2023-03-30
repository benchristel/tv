// @flow
import type { Channel } from "./ShuffledChannel"
import type { PlayerStateCode } from "./youtube/player.jsx"
import { State as PlayerState } from "./youtube/player.jsx"

import * as React from "react"

type Props = {|
  code: PlayerStateCode,
  channel: Channel,
|}

export function stateString(code: PlayerStateCode): string {
  switch (code) {
    case PlayerState.BUFFERING:
      return "buffering"
    case PlayerState.UNSTARTED:
      return "unstarted"
    case PlayerState.CUED:
      return "cued"
    case PlayerState.ENDED:
      return "ended"
    case PlayerState.PLAYING:
      return "playing"
    case PlayerState.PAUSED:
      return "paused"
    default:
      return ""
  }
}

export function PlayerStateView(props: Props): React.Node {
  return props.channel.getName() + " " + stateString(props.code)
}
