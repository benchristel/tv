import { debugTimestamp } from "../lib/time"

import { videoIdFromUrl } from "./videoId"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => unknown
  }
}

export type PlayerStateCode = -1 | 0 | 1 | 2 | 3 | 5

export interface Player {
  getPlayerState(): PlayerStateCode;
  getCurrentTime(): number;
  getVideoUrl(): string;
  cueVideoById(id: string, time: number): void;
  playVideo(): void;
  seekTo(time: number): void;
  getDuration(): number;
  addEventListener(eventName: string, cb: (event: { data: PlayerStateCode }) => unknown): unknown;
  removeEventListener(eventName: string, cb: () => unknown): unknown;
  setVolume(volume: number): void;
}

export function nullPlayer(): Player {
  return {
    getPlayerState(): PlayerStateCode {
      return State.UNSTARTED
    },
    getCurrentTime() {
      return 0
    },
    getVideoUrl() {
      return ""
    },
    cueVideoById() {},
    playVideo() {},
    seekTo() {},
    getDuration() {
      return 0
    },
    addEventListener() {},
    removeEventListener() {},
    setVolume() {},
  }
}

export function debuggingDecorator(wrapped: Player): Player {
  return {
    getPlayerState() {
      return wrapped.getPlayerState()
    },
    getCurrentTime() {
      return wrapped.getCurrentTime()
    },
    getVideoUrl() {
      return wrapped.getVideoUrl()
    },
    cueVideoById(...args) {
      console.debug(debugTimestamp(), "player.cueVideoById", ...args)
      return wrapped.cueVideoById(...args)
    },
    playVideo(...args) {
      console.debug(debugTimestamp(), "player.playVideo", ...args)
      return wrapped.playVideo(...args)
    },
    seekTo(...args) {
      console.debug(
        debugTimestamp(),
        "player.seekTo",
        ...args,
        videoIdFromUrl(wrapped.getVideoUrl())
      )
      return wrapped.seekTo(...args)
    },
    getDuration() {
      return wrapped.getDuration()
    },
    addEventListener(...args) {
      console.debug(debugTimestamp(), "player.addEventListener")
      return wrapped.addEventListener(...args)
    },
    removeEventListener(...args) {
      console.debug(debugTimestamp(), "player.removeEventListener")
      return wrapped.removeEventListener(...args)
    },
    setVolume(...args) {
      wrapped.setVolume(...args)
    }
  }
}

export const State = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const

export async function createYouTubePlayer(elementId: string): Promise<Player> {
  const yt = await loadYouTubePlayerAPI()
  return new Promise((resolve) => {
    const player = new yt.Player(elementId, {
      height: 450,
      width: 800,
      videoId: "AofJfWEhesg",
      playerVars: {
        controls: 0,
        disablekb: 1,
        iv_load_policy: 3,
        fs: 0,
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
const callbacks: ((yt: typeof window.YT) => unknown)[] = []
window.onYouTubeIframeAPIReady = () => {
  playerApiLoaded = true
  callbacks.forEach((c) => c(window.YT))
  callbacks.length = 0 // free memory
}
