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

export function App(): React.Node {
  return (
    <div className="App">
      <div className="bezel">
        <ChannelController>
          {(channel) => (
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
          )}
        </ChannelController>
      </div>
    </div>
  )
}

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
