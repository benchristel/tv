// @flow
import * as React from "react"
import { useRef, useEffect, useState } from "react"
import { YouTubePlayer, State as PlayerState } from "./youtube/player"
import type { Player } from "./youtube/player"
import { useInterval } from "./lib/useInterval"
import { Reconciler } from "./Reconciler.jsx"
import type { Broadcast } from "./Broadcast"
import { createChannel } from "./Channel"
import type { Channel } from "./Channel"
import { ChannelController } from "./ChannelController.jsx"
import { PlayerStateView } from "./PlayerStateView.jsx"
import { Broadcaster } from "./Broadcaster"
import { ChannelView } from "./ChannelView.jsx"

export function App(): React.Node {
  const [userRequestedPlayback, setUserRequestedPlayback] = useState(false)
  return (
    <ChannelController onChange={() => setUserRequestedPlayback(true)}>
      {(channel, changeChannel) => (
        <Broadcaster {...{ channel, userRequestedPlayback }}>
          {(broadcast) => (
            <Layout
              screen={
                <>
                  <PlayerAssembly {...{ broadcast, channel }} />
                  {!userRequestedPlayback && (
                    <PlayButtonOverlay
                      onClick={() => setUserRequestedPlayback(true)}
                    />
                  )}
                </>
              }
              controlPanel={
                <ChannelView
                  channel={channel}
                  onChannelSelected={changeChannel}
                />
              }
            />
          )}
        </Broadcaster>
      )}
    </ChannelController>
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
|}): React.Node {
  return (
    <YouTubePlayer id="player-container">
      {(player) => (
        <Reconciler broadcast={props.broadcast} player={player}>
          {(playerState) => (
            <div className="black-screen">
              <PlayerStateView code={playerState} channel={props.channel} />
            </div>
          )}
        </Reconciler>
      )}
    </YouTubePlayer>
  )
}
