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
          <Broadcaster channel={channel}>
            {(broadcast) => (
              <YouTubePlayer id="player-container">
                {(player) => (
                  <Reconciler broadcast={broadcast} player={player} />
                )}
              </YouTubePlayer>
            )}
          </Broadcaster>
        </div>
      </div>
    </div>
  )
}

// PROTOTYPE: for now, each episode just has one video in it.
const episodes = videos.map((v) => ({ videos: [v] }))
const channel = createChannel(episodes)

type Props = {|
  channel: Channel,
  children: (Broadcast) => React.Node,
|}

function Broadcaster(props: Props): React.Node {
  const { channel, children } = props

  const [now, setNow] = useState(+new Date())
  const [userRequestedPlayback, setUserRequestedPlayback] = useState(false)

  useInterval(() => setNow(+new Date()), 1000)

  return (
    <>
      {!userRequestedPlayback && (
        <button id="start" onClick={() => setUserRequestedPlayback(true)}>
          Play
        </button>
      )}
      {children(
        userRequestedPlayback ? channel.getBroadcast(now) : { type: "nothing" }
      )}
    </>
  )
}
