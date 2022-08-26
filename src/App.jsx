// @flow
import * as React from "react"
import { useState } from "react"
import { State as PlayerState } from "./youtube/player"
import { useInterval } from "./lib/useInterval"
import { useLatch } from "./lib/useLatch"
import { PlayerStateView } from "./PlayerStateView.jsx"
import { ChannelView } from "./ChannelView.jsx"
import { channels } from "./data/channels"
import { useNow } from "./lib/useNow"
import { nothing } from "./Broadcast"
import { reconcile } from "./reconcile.js"
import { useYouTubePlayer } from "./useYouTubePlayer"

export function App(): React.Node {
  const [userRequestedPlayback, setUserRequestedPlayback] = useLatch()
  const [channel, setChannel] = useState(channels[0])
  const now = useNow()
  const broadcast = userRequestedPlayback
    ? channel.getBroadcast(now)
    : nothing()
  const player = useYouTubePlayer("player-container")
  const playerState = player.getPlayerState()
  const hideVideo = playerState !== PlayerState.PLAYING
  reconcile(broadcast, player)

  return (
    <Layout
      screen={
        <>
          <div id="player-container" />
          {hideVideo && (
            <div className="black-screen">
              <PlayerStateView code={playerState} channel={channel} />
            </div>
          )}
          {!userRequestedPlayback && (
            <PlayButtonOverlay onClick={setUserRequestedPlayback} />
          )}
        </>
      }
      controlPanel={
        <ChannelView
          onChannelSelected={(ch) => {
            setChannel(ch)
            setUserRequestedPlayback()
          }}
        />
      }
    />
  )
}

function Layout(props: {|
  screen: React.Node,
  controlPanel: React.Node,
|}): React.Node {
  return (
    <div className="App">
      <div className="bezel">
        <div className="screen">{props.screen}</div>
        <div style={{ height: "12px" }} />
        <div className="controls">{props.controlPanel}</div>
      </div>
    </div>
  )
}

function PlayButtonOverlay(props: {| onClick: () => mixed |}): React.Node {
  return (
    <button id="start" onClick={props.onClick}>
      ▸ Play
    </button>
  )
}
