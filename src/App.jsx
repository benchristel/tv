// @flow
import * as React from "react"
import { useRef, useEffect, useState } from "react"
import { YouTubePlayer, State as PlayerState } from "./youtube/player"
import type { Player } from "./youtube/player"
import { useInterval } from "./lib/useInterval"
import { useLatch } from "./lib/useLatch"
import { Reconciler } from "./Reconciler.jsx"
import type { Broadcast } from "./Broadcast"
import { createChannel } from "./Channel"
import type { Channel } from "./Channel"
import { PlayerStateView } from "./PlayerStateView.jsx"
import { ChannelView } from "./ChannelView.jsx"
import type { PlayerStateCode } from "./youtube/player.jsx"
import { State } from "./youtube/player.jsx"
import { channels } from "./data/channels"
import { useNow } from "./lib/useNow"
import { nothing } from "./Broadcast"

export function App(): React.Node {
  const [userRequestedPlayback, setUserRequestedPlayback] = useLatch()
  const [channel, setChannel] = useState(channels[0])
  const now = useNow()
  const broadcast = userRequestedPlayback
    ? channel.getBroadcast(now)
    : nothing()
  return (
    <Layout
      screen={
        <>
          <PlayerAssembly
            broadcast={broadcast}
            channel={channel}
            playerContainerId="player-container"
          >
            {(playerState, hideVideo) => (
              <>
                <div id="player-container" />
                {hideVideo && (
                  <div className="black-screen">
                    <PlayerStateView code={playerState} channel={channel} />
                  </div>
                )}
              </>
            )}
          </PlayerAssembly>
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

function PlayerAssembly(props: {|
  broadcast: Broadcast,
  channel: Channel,
  playerContainerId: string,
  children: (PlayerStateCode) => React.Node,
|}): React.Node {
  return (
    <YouTubePlayer id={props.playerContainerId}>
      {(player) => (
        <Reconciler broadcast={props.broadcast} player={player}>
          {props.children}
        </Reconciler>
      )}
    </YouTubePlayer>
  )
}
