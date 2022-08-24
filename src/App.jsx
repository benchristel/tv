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

export function App(): React.Node {
  const [userRequestedPlayback, setUserRequestedPlayback] = useState(false)
  return (
    <div className="App">
      <div className="bezel">
        <ChannelController onChange={() => setUserRequestedPlayback(true)}>
          {(channel) => (
            <div className="screen">
              <Broadcaster
                channel={channel}
                userRequestedPlayback={userRequestedPlayback}
                onUserRequestedPlayback={() => setUserRequestedPlayback(true)}
              >
                {(broadcast) => <PlayerAssembly {...{ broadcast, channel }} />}
              </Broadcaster>
            </div>
          )}
        </ChannelController>
      </div>
    </div>
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
