// @flow
import * as React from "react"
import { useRef, useEffect, useState } from "react"
import "./App.css"
import { test, expect, is } from "@benchristel/taste"
import { YouTubePlayer, State as PlayerState } from "./youtube/player"
import type { Player } from "./youtube/player"
import "./data/ingestion"
import type { Video } from "./data/types"
import { videos } from "./data/shows"
import { cyrb128_32 } from "./lib/hash"
import { mulberry32 } from "./lib/random"
import { pick } from "./lib/arrays"

export function App(): React.Node {
  return (
    <div className="App">
      <YouTubePlayer id="player-container">
        {(player) => <Controller player={player} model={model} />}
      </YouTubePlayer>
    </div>
  )
}

// PROTOTYPE: for now, each episode just has one video in it.
const episodes = videos.map((v) => ({ videos: [v] }))
const model = createModel()

function createModel() {
  let scheduleCache = {}
  return {
    getTargets,
  }

  function getTargets(time) {
    const seconds = Math.floor(time / 1000)
    const secondsOfDay = (seconds - 8 * 3600) % (24 * 3600)
    const dayBoundary = seconds - secondsOfDay
    const schedule = getSchedule(String(dayBoundary))
    let totalDuration = 0
    let video
    for (video of schedule) {
      totalDuration += video.durationSeconds
      if (totalDuration >= secondsOfDay) {
        return {
          targetVideoId: video.videoId,
          targetTime: video.durationSeconds - (totalDuration - secondsOfDay),
        }
      }
    }
    // default to static
    return { targetTime: 10, targetVideoId: "ubFq-wV3Eic" }
  }

  function getSchedule(seed) {
    if (!scheduleCache[seed]) {
      // clear the cache; we should only ever need to cache
      // one day's schedule at a time.
      scheduleCache = {}
      console.debug("scheduleCache miss; regenerating")
      scheduleCache[seed] = generateSchedule(seed)
    }
    return scheduleCache[seed]
  }

  function generateSchedule(seed) {
    const rng = mulberry32(cyrb128_32(seed))
    let totalDuration = 0
    let schedule = []
    while (totalDuration < 24 * 3600) {
      const episode = pick(episodes, rng())
      totalDuration += episode.videos
        .map((v) => v.durationSeconds)
        .reduce(add, 0)
      schedule.push(...episode.videos)
    }
    return schedule
  }
}

interface Model {
  getTargets(time: number): {| targetVideoId: string, targetTime: number |};
}

function Controller(props: {| player: Player, model: Model |}): React.Node {
  useInterval(reconcile, 1000)
  const [userRequestedPlayback, setUserRequestedPlayback] = useState(false)
  const { player, model } = props

  function reconcile() {
    if (!userRequestedPlayback) return
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

    const now = +new Date()
    const { targetVideoId, targetTime } = model.getTargets(now) //= "s38tEcEXUAo"

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

  return !userRequestedPlayback ? (
    <button
      id="start"
      onClick={() => {
        player.cueVideoById("ubFq-wV3Eic", 10) // static
        player.playVideo()
        setUserRequestedPlayback(true)
      }}
    >
      Play
    </button>
  ) : null
}

function useInterval(cb, ms) {
  const intervalRef = useRef()
  const callbackRef = useRef()
  callbackRef.current = cb
  useEffect(() => {
    intervalRef.current = setInterval(() => callbackRef.current?.(), ms)
    return () => clearInterval(intervalRef.current)
  }, [ms])
}

function videoIdFromUrl(url) {
  return /v=(.{11})/.exec(url)?.[1]
}

function delta(a, b) {
  return Math.abs(a - b)
}

function add(a, b) {
  return a + b
}
