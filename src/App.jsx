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
import { useInterval } from "./lib/useInterval"
import { cache } from "./lib/cache"
import { Reconciler } from "./Reconciler.jsx"

export function App(): React.Node {
  return (
    <div className="App">
      <div className="bezel">
        <div className="screen">
          <YouTubePlayer id="player-container">
            {(player) => <Controller player={player} model={model} />}
          </YouTubePlayer>
        </div>
      </div>
    </div>
  )
}

// PROTOTYPE: for now, each episode just has one video in it.
const episodes = videos.map((v) => ({ videos: [v] }))
const model = createModel()

function createModel() {
  const getSchedule = cache(1, (seed) => {
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
  })

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
    return { targetTime: 0, targetVideoId: "" }
  }
}

interface Model {
  getTargets(time: number): {| targetVideoId: string, targetTime: number |};
}

function Controller(props: {| player: Player, model: Model |}): React.Node {
  const [now, setNow] = useState(+new Date())
  useInterval(() => setNow(+new Date()), 1000)
  const [userRequestedPlayback, setUserRequestedPlayback] = useState(false)
  const { model } = props

  const { targetVideoId, targetTime } = model.getTargets(now)

  return (
    <>
      {!userRequestedPlayback && (
        <button id="start" onClick={() => setUserRequestedPlayback(true)}>
          Play
        </button>
      )}
      <Reconciler
        player={props.player}
        broadcast={
          userRequestedPlayback
            ? { type: "video", videoId: targetVideoId, currentTime: targetTime }
            : { type: "nothing" }
        }
      />
    </>
  )
}

function add(a, b) {
  return a + b
}
