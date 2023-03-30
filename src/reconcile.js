// @flow

import type { Player, PlayerStateCode } from "./youtube/player"
import { State as PlayerState } from "./youtube/player"
import { videoIdFromUrl } from "./youtube/videoId"
import type { Broadcast } from "./Broadcast"
import { GAP_SECONDS } from "./ShuffledChannel"
import type { Command } from "./PlayerCommander.jsx"
import type { PlayerStatus } from "./PlayerStatus"

export function reconcile(
  broadcast: Broadcast,
  player: PlayerStatus
): Array<Command> {
  const {
    state: currentState,
    videoId: currentVideoId,
    time: currentTime,
  } = player

  if (broadcast.type === "nothing") {
    switch (currentState) {
      case PlayerState.ENDED:
      case PlayerState.CUED:
      case PlayerState.UNSTARTED:
        if (!broadcast.nextVideoId) return []
        if (currentVideoId !== broadcast.nextVideoId) {
          return [{ type: "cue", videoId: broadcast.nextVideoId, timestamp: 0 }]
          // Note: no play command here.
          // Cueing is asynchronous, so if we call play it will actually
          // play the previous video.
        } else {
          return [{ type: "seek", timestamp: 0 }, { type: "play" }]
        }
      default:
        return []
    }
  } else {
    // If the player is buffering, just let it do its thing.
    if (currentState === PlayerState.BUFFERING) return []
    const { videoId: targetVideoId, currentTime: targetTime } = broadcast
    if (currentVideoId !== targetVideoId) {
      return [
        {
          type: "cue",
          videoId: targetVideoId,
          // If we're near the start of the video, just play it from the
          // begnning. This prevents the first second of the video
          // from being cut off after the previous video ends.
          timestamp: targetTime < GAP_SECONDS ? 0 : targetTime,
        },
      ]
    } else {
      // currentVideoId === targetVideoId
      // Only attempt to play/seek if the correct video is loaded.
      // Otherwise, the player may end up replaying the first few frames
      // of the video that just ended before switching to the next one.
      const cmds = []
      switch (currentState) {
        case PlayerState.PAUSED:
        case PlayerState.CUED:
        case PlayerState.UNSTARTED:
          if (currentVideoId) cmds.push({ type: "play" })
      }

      if (currentTime && delta(currentTime, targetTime) >= GAP_SECONDS) {
        console.debug("time is off; seeking", currentTime, targetTime)
        cmds.push({ type: "seek", timestamp: targetTime })
      }
      return cmds
    }
  }
}

function delta(a: number, b: number) {
  return Math.abs(a - b)
}
