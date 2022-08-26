// @flow

import * as React from "react"
import type { Player } from "./youtube/player"
import { State as PlayerState } from "./youtube/player"
import { videoIdFromUrl } from "./youtube/videoId"
import type { Broadcast } from "./Broadcast"
import { useModel } from "./lib/useModel"
import { GAP_SECONDS } from "./Channel"
import type { PlayerStateCode } from "./youtube/player.jsx"

type Props = {|
  player: Player,
  broadcast: Broadcast,
  children: (
    playerStateCode: PlayerStateCode,
    hideVideo: boolean
  ) => React.Node,
|}

export function Reconciler(props: Props): React.Node {
  const { broadcast, player } = props
  const currentState = player.getPlayerState()
  const currentVideoId = videoIdFromUrl(player.getVideoUrl())
  useModel((rerender) => {
    player.addEventListener("onStateChange", rerender)
  })

  if (broadcast.type === "nothing") {
    switch (currentState) {
      case PlayerState.ENDED:
      case PlayerState.CUED:
      case PlayerState.UNSTARTED:
        if (currentVideoId !== broadcast.nextVideoId) {
          player.cueVideoById(broadcast.nextVideoId, 0)
        } else {
          player.seekTo(0)
        }
        player.playVideo()
    }
  } else if (currentState !== PlayerState.BUFFERING) {
    const { videoId: targetVideoId, currentTime: targetTime } = broadcast
    if (currentVideoId !== targetVideoId) {
      player.cueVideoById(
        targetVideoId,
        // If we're near the start of the video, just play it from the
        // begnning. This prevents the first second of the video
        // from being cut off after the previous video ends.
        targetTime < GAP_SECONDS ? 0 : targetTime
      )
    }

    switch (currentState) {
      case PlayerState.PAUSED:
      case PlayerState.CUED:
      case PlayerState.UNSTARTED:
        currentVideoId && player.playVideo()
    }

    const currentTime = player.getCurrentTime()
    if (delta(currentTime, targetTime) >= GAP_SECONDS) {
      console.debug("time is off; seeking", currentTime, targetTime)
      player.seekTo(targetTime)
    }
  }

  return props.children(currentState, currentState !== PlayerState.PLAYING)
}

function delta(a, b) {
  return Math.abs(a - b)
}
