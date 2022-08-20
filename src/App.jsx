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
                {(broadcast) => (
                  <YouTubePlayer id="player-container">
                    {(player) => (
                      <Reconciler broadcast={broadcast} player={player}>
                        {(playerState) => (
                          <div className="black-screen">
                            <PlayerStateView
                              code={playerState}
                              channel={channel}
                            />
                          </div>
                        )}
                      </Reconciler>
                    )}
                  </YouTubePlayer>
                )}
              </Broadcaster>
            </div>
          )}
        </ChannelController>
      </div>
    </div>
  )
}

type Props = {|
  channel: Channel,
  userRequestedPlayback: boolean,
  onUserRequestedPlayback: () => mixed,
  children: (Broadcast) => React.Node,
|}

function Broadcaster(props: Props): React.Node {
  const { channel, children, onUserRequestedPlayback, userRequestedPlayback } =
    props

  const [now, setNow] = useState(+new Date())

  useInterval(() => setNow(+new Date()), 1000)

  return (
    <>
      {!userRequestedPlayback && (
        <button id="start" onClick={onUserRequestedPlayback}>
          ▸ Play
        </button>
      )}
      {children(
        userRequestedPlayback ? channel.getBroadcast(now) : { type: "nothing" }
      )}
    </>
  )
}
