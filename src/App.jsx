// @flow
import * as React from "react"
import { useRef, useEffect, useState } from "react"
import "./App.css"
import { YouTubePlayer, State as PlayerState } from "./youtube/player"
import type { Player } from "./youtube/player"
import { videos } from "./data/shows"
import { useInterval } from "./lib/useInterval"
import { Reconciler } from "./Reconciler.jsx"
import type { Broadcast } from "./Broadcast"
import { createChannel } from "./Channel"
import type { Channel } from "./Channel"

export function App(): React.Node {
  return (
    <div className="App">
      <div className="bezel">
        <div className="screen">
          <YouTubePlayer id="player-container">
            {(player) => <Controller player={player} channel={channel} />}
          </YouTubePlayer>
        </div>
      </div>
    </div>
  )
}

// PROTOTYPE: for now, each episode just has one video in it.
const episodes = videos.map((v) => ({ videos: [v] }))
const channel = createChannel(episodes)

function Controller(props: {| player: Player, channel: Channel |}): React.Node {
  const [now, setNow] = useState(+new Date())
  useInterval(() => setNow(+new Date()), 1000)
  const [userRequestedPlayback, setUserRequestedPlayback] = useState(false)
  const { channel } = props

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
            ? channel.getBroadcast(now)
            : { type: "nothing" }
        }
      />
    </>
  )
}
