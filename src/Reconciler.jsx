// @flow

import * as React from "react"
import { useEffect } from "react"
import type { Player } from "./youtube/player"
import { State as PlayerState } from "./youtube/player"
import { videoIdFromUrl } from "./youtube/videoId"
import type { Broadcast } from "./Broadcast"
import { useModel } from "./lib/useModel"
import { broadcastString } from "./Broadcast"

type Props = {|
  player: Player,
  broadcast: Broadcast,
  children: (playerStateCode: -1 | 0 | 1 | 2 | 3 | 5) => React.Node,
|}

export function Reconciler(props: Props): React.Node {
  const { broadcast, player } = props
  useEffect(reconcile, [broadcastString(broadcast)])
  useModel((observer) => {
    player.addEventListener("onStateChange", observer)
    // we need to return a non-nullish value here, or an additional
    // onStateChange callback will get registered on every re-render, causing
    // performance to degrade exponentially.
    return true
  })

  function reconcile() {
    if (broadcast.type === "nothing") return

    const { videoId: targetVideoId, currentTime: targetTime } = broadcast

    const currentState = player.getPlayerState()
    const currentVideoId = videoIdFromUrl(player.getVideoUrl())

    switch (currentState) {
      // if the player is in an "in-between" state, just let it do its thing
      case PlayerState.BUFFERING:
        return
      case PlayerState.CUED:
      case PlayerState.UNSTARTED:
      case PlayerState.ENDED:
      case PlayerState.PLAYING:
      case PlayerState.PAUSED:
    }

    if (currentVideoId !== targetVideoId) {
      console.debug(
        "video ID changed",
        currentVideoId,
        targetVideoId,
        targetTime
      )
      if (targetTime < 5) {
        // If we're near the start of the video, just play it from the
        // beginning. This prevents the first second of the video
        // from being cut off after the previous video ends.
        console.debug("target time is near 0; starting from beginning")
        player.cueVideoById(targetVideoId, 0)
      } else {
        player.cueVideoById(targetVideoId, targetTime)
      }
      return
    }

    if (
      !(
        currentState === PlayerState.PLAYING ||
        currentState === PlayerState.ENDED
      ) &&
      currentVideoId
    ) {
      console.debug("video stopped; playing it")
      player.playVideo()
      return
    }

    const currentTime = player.getCurrentTime()
    if (delta(currentTime, targetTime) >= 5) {
      console.debug("time is off; seeking", currentTime, targetTime)
      player.seekTo(targetTime)
    }
  }

  return player.getPlayerState() !== PlayerState.PLAYING
    ? props.children(player.getPlayerState())
    : null
}

function delta(a, b) {
  return Math.abs(a - b)
}
