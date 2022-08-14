// @flow
import * as React from "react"
import { useEffect, useRef, useState } from "react"

export interface Player {
  getPlayerState(): -1 | 0 | 1 | 2 | 3 | 5;
  getCurrentTime(): number;
  getVideoUrl(): string;
  cueVideoById(string, time: number): void;
  playVideo(): void;
  seekTo(time: number): void;
  addEventListener(string, () => mixed): mixed;
  removeEventListener(string, () => mixed): mixed;
}

type Props = {|
  id: string,
  children: (Player) => React.Node,
|}

export const State = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
}

export function YouTubePlayer(props: Props): React.Node {
  const { id } = props
  const [loaded, setLoaded] = useState(false)
  const playerRef = useRef<?Player>(null)
  useEffect(() => {
    createYouTubePlayer(id).then((player) => {
      playerRef.current = player
      setLoaded(true)
    })
  }, [id])

  return (
    <>
      <div id={props.id} />
      {loaded && playerRef.current ? props.children(playerRef.current) : null}
    </>
  )
}

async function createYouTubePlayer(elementId: string): Promise<Player> {
  const yt = await loadYouTubePlayerAPI()
  return new Promise((resolve) => {
    const player = new yt.Player(elementId, {
      height: 450,
      width: 800,
      videoId: null,
      playerVars: {
        controls: 0,
        disablekb: 1,
      },
      events: {
        onReady() {
          resolve(player)
        },
      },
    })
  })
}

function loadYouTubePlayerAPI() {
  if (playerApiLoaded) return Promise.resolve(window.YT)

  return new Promise((resolve) => {
    if (
      document.querySelector(
        "script[src='https://www.youtube.com/iframe_api']"
      ) === null
    ) {
      const ytScriptTag = document.createElement("script")
      ytScriptTag.src = "https://www.youtube.com/iframe_api"
      let firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(ytScriptTag, firstScriptTag)
    }
    callbacks.push(resolve)
  })
}

let playerApiLoaded = false
const callbacks = []
window.onYouTubeIframeAPIReady = () => {
  playerApiLoaded = true
  callbacks.forEach((c) => c(window.YT))
  callbacks.length = 0 // free memory
}
