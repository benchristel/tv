import * as React from "react"
import { useState, useRef, useCallback } from "react"
import { State as PlayerState } from "./youtube/player"
import { useLatch } from "./lib/useLatch"
import { PlayerStateView } from "./PlayerStateView"
import { ChannelSwitcher } from "./ChannelSwitcher"
import { channels as channelData } from "./data/channels"
import { useNow } from "./lib/useNow"
import { nothing } from "./Broadcast"
import { reconcile } from "./reconcile.js"
import { useYouTubePlayer } from "./useYouTubePlayer"
import { VideoInfo } from "./VideoInfo.jsx"
import { debuggingDecorator } from "./youtube/player"
import { PlayerCommander } from "./PlayerCommander"
import { status } from "./PlayerStatus.js"
import { ShuffledChannel } from "./ShuffledChannel";
import { SegmentBoundaryTestChannel } from "./SegmentBoundaryTestChannel";
import { VolumeControl } from "./VolumeControl.jsx";

const channels = channelData
  .map(([name, algorithm, episodes]) => {
    switch (algorithm) {
      case "shuffle":
        return ShuffledChannel(name, episodes)
      case "test-segment-boundaries":
        return SegmentBoundaryTestChannel(name, episodes)
    }
  })

export function App(): React.ReactElement {
  const [userRequestedPlayback, setUserRequestedPlayback] = useLatch()
  const [infoPaneOpen, setInfoPaneOpen] = useState(false)
  const [channel, setChannel] = useState(channels[0])
  const [volume, setVolume] = useState(100)
  const now = useNow()
  const broadcast = userRequestedPlayback
    ? channel.getBroadcast(now)
    : nothing()
  const player = debuggingDecorator(useYouTubePlayer("player-container"))
  const playerStatus = status(player)
  const playerState = playerStatus.state
  const hideVideo = playerState !== PlayerState.PLAYING
  const playerCommands = reconcile(broadcast, playerStatus)
  const infoButtonRef = useRef<HTMLButtonElement>(null)
  const closeInfoPane = useCallback(() => {
    setInfoPaneOpen(false);
    infoButtonRef.current?.focus()
  }, [])
  const openInfoPane = useCallback(() => {
    setInfoPaneOpen(true);
  }, [])

  return (
    <Layout
      effects={
        <PlayerCommander
          player={player}
          commands={playerCommands}
          volume={volume}
          now={now}
        />
      }
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
          <VideoInfo
            isOpen={infoPaneOpen}
            player={playerStatus}
            broadcast={broadcast}
            channels={channels}
            onClose={closeInfoPane}
          />
          <div
            className="info-pane-close-overlay"
            aria-hidden={true}
            onClick={closeInfoPane}
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
          <VolumeControl volume={volume} onChange={setVolume}/>
          <button
            className={
              infoPaneOpen
                ? "info-button info-button-info-pane-open"
                : "info-button"
            }
            onClick={() => {
              (infoPaneOpen ? closeInfoPane : openInfoPane)()
            }}
            ref={infoButtonRef}
          >
            Info
          </button>
        </>
      }
    />
  )
}

function Layout(props: {
  screen: React.ReactElement,
  controlPanel: React.ReactElement,
  effects: React.ReactElement,
}) {
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

function PlayButtonOverlay(props: { onClick: () => unknown }) {
  return (
    <button id="start" onClick={props.onClick}>
      ▸ Play
    </button>
  )
}
