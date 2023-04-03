// @flow
import * as React from "react"
import { useState } from "react"
import { State as PlayerState } from "./youtube/player"
import { useInterval } from "./lib/useInterval"
import { useLatch } from "./lib/useLatch"
import { PlayerStateView } from "./PlayerStateView.jsx"
import { ChannelSwitcher } from "./ChannelSwitcher.jsx"
import { channels as channelData } from "./data/channels"
import { useNow } from "./lib/useNow"
import { nothing } from "./Broadcast"
import { reconcile } from "./reconcile.js"
import { useYouTubePlayer } from "./useYouTubePlayer"
import { VideoInfo } from "./VideoInfo.jsx"
import { debuggingDecorator } from "./youtube/player.jsx"
import { PlayerCommander } from "./PlayerCommander.jsx"
import { status } from "./PlayerStatus.js"
import { ShuffledChannel } from "./ShuffledChannel";
import { SegmentBoundaryTestChannel } from "./SegmentBoundaryTestChannel";

const channels = channelData
  .map(([name, algorithm, episodes]) => {
    switch (algorithm) {
      case "shuffle":
        return ShuffledChannel(name, episodes)
      case "test-segment-boundaries":
        return SegmentBoundaryTestChannel(name, episodes)
    }
  })

export function App(): React.Node {
  const [userRequestedPlayback, setUserRequestedPlayback] = useLatch()
  const [infoPaneOpen, setInfoPaneOpen] = useState(false)
  const [channel, setChannel] = useState(channels[0])
  const now = useNow()
  const broadcast = userRequestedPlayback
    ? channel.getBroadcast(now)
    : nothing()
  const player = debuggingDecorator(useYouTubePlayer("player-container"))
  const playerStatus = status(player)
  const playerState = playerStatus.state
  const hideVideo = playerState !== PlayerState.PLAYING
  const playerCommands = reconcile(broadcast, playerStatus)

  return (
    <Layout
      effects={<PlayerCommander commands={playerCommands} player={player} />}
      screen={
        <div className={infoPaneOpen ? "info-pane-open" : ""}>
          <div className="player-assembly">
            <div id="player-container" />
            {hideVideo && (
              <div className="black-screen">
                <PlayerStateView code={playerState} channel={channel} />
              </div>
            )}
            {!userRequestedPlayback && (
              <PlayButtonOverlay onClick={setUserRequestedPlayback} />
            )}
          </div>
          <div className="info-pane">
            <VideoInfo
              player={playerStatus}
              broadcast={broadcast}
              channels={channels}
              onClose={() => setInfoPaneOpen(false)}
            />
          </div>
          <div
            className="info-pane-close-overlay"
            aria-hidden={true}
            onClick={() => setInfoPaneOpen(false)}
          />
        </div>
      }
      controlPanel={
        <>
          <ChannelSwitcher
            channels={channels}
            onChannelSelected={(ch) => {
              setChannel(ch)
              setUserRequestedPlayback()
            }}
          />
          <button
            className={
              infoPaneOpen
                ? "info-button info-button-info-pane-open"
                : "info-button"
            }
            onClick={() => setInfoPaneOpen(!infoPaneOpen)}
          >
            Info
          </button>
        </>
      }
    />
  )
}

function Layout(props: {|
  screen: React.Node,
  controlPanel: React.Node,
  effects: React.Node,
|}): React.Node {
  return (
    <div className="App">
      <div className="bezel">
        <div className="screen">{props.screen}</div>
        <div style={{ height: "12px" }} />
        <div className="controls">{props.controlPanel}</div>
        {props.effects}
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
