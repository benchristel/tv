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
  useModel((observer) => {
    player.addEventListener("onStateChange", observer)
  })

  reconcile()
  function reconcile() {
    if (broadcast.type === "nothing") {
      switch (currentState) {
        case PlayerState.ENDED:
        case PlayerState.CUED:
        case PlayerState.UNSTARTED:
          if (videoIdFromUrl(player.getVideoUrl()) !== broadcast.nextVideoId) {
            console.log("gap; next up is", broadcast.nextVideoId, currentState)
            player.cueVideoById(broadcast.nextVideoId, 0)
            player.playVideo()
          } else {
            player.seekTo(0)
            player.playVideo()
          }
      }
      return
    }

    const { videoId: targetVideoId, currentTime: targetTime } = broadcast
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
      if (targetTime < GAP_SECONDS) {
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
    if (delta(currentTime, targetTime) >= GAP_SECONDS) {
      console.debug("time is off; seeking", currentTime, targetTime)
      player.seekTo(targetTime)
    } else {
      console.debug("seconds behind schedule", targetTime - currentTime)
    }
  }

  return props.children(currentState, currentState !== PlayerState.PLAYING)
}

function delta(a, b) {
  return Math.abs(a - b)
}
