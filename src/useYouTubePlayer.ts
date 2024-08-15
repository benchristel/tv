import type { Player } from "./youtube/player"
import { stateString } from "./PlayerStateView"
import { debugTimestamp } from "./lib/time"
import { createYouTubePlayer, nullPlayer } from "./youtube/player"
import { videoIdFromUrl } from "./youtube/videoId"

import { useEffect, useRef, useState } from "react"

let nonce = 0
function useRerender() {
  const [, setNonce] = useState(0)
  return () => setNonce(++nonce)
}

export function useYouTubePlayer(id: string): Player {
  const rerender = useRerender()
  const playerRef = useRef<Player>(nullPlayer())
  useEffect(() => {
    createYouTubePlayer(id).then((player) => {
      playerRef.current = player
      player.addEventListener("onStateChange", (event) => {
        console.debug(
          debugTimestamp(),
          "player onStateChange",
          stateString(event.data),
          videoIdFromUrl(player.getVideoUrl())
        )
        rerender()
      })
      rerender()
    })
  }, [id])

  return playerRef.current
}
