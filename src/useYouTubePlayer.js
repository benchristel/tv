// @flow

import type { Player } from "./youtube/player.jsx"
import { createYouTubePlayer, nullPlayer } from "./youtube/player.jsx"
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
      player.addEventListener("onStateChange", rerender)
      rerender()
    })
  }, [id])

  return playerRef.current
}
