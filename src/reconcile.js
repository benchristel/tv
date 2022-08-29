// @flow

import type { Player, PlayerStateCode } from "./youtube/player"
import { State as PlayerState } from "./youtube/player"
import { videoIdFromUrl } from "./youtube/videoId"
import type { Broadcast } from "./Broadcast"
import { GAP_SECONDS } from "./Channel"

export function reconcile(broadcast: Broadcast, player: Player): void {
  const currentState = player.getPlayerState()
  const currentVideoId = videoIdFromUrl(player.getVideoUrl())

  if (broadcast.type === "nothing") {
    switch (currentState) {
      case PlayerState.ENDED:
      case PlayerState.CUED:
      case PlayerState.UNSTARTED:
        if (!broadcast.nextVideoId) break
        if (currentVideoId !== broadcast.nextVideoId) {
          player.cueVideoById(broadcast.nextVideoId, 0)
          // Note: no playVideo() call here.
          // Cueing is asynchronous, so if we call playVideo() it will actually
          // play the previous video.
        } else {
          player.seekTo(0)
          player.playVideo()
        }
    }
  } else {
    // If the player is buffering, just let it do its thing.
    if (currentState === PlayerState.BUFFERING) return
    const { videoId: targetVideoId, currentTime: targetTime } = broadcast
    if (currentVideoId !== targetVideoId) {
      player.cueVideoById(
        targetVideoId,
        // If we're near the start of the video, just play it from the
        // begnning. This prevents the first second of the video
        // from being cut off after the previous video ends.
        targetTime < GAP_SECONDS ? 0 : targetTime
      )
    } else {
      // currentVideoId === targetVideoId
      // Only attempt to play/seek if the correct video is loaded.
      // Otherwise, the player may end up replaying the first few frames
      // of the video that just ended before switching to the next one.
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
  }
}

function delta(a, b) {
  return Math.abs(a - b)
}
