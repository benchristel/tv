// @flow
import type { Broadcast } from "./Broadcast"
import type { PlayerStatus } from "./PlayerStatus"
import type { Player } from "./youtube/player.jsx"
import { stateString } from "./PlayerStateView.jsx"
import { hoursMinutesSeconds } from "./lib/time"
import { videoIdFromUrl } from "./youtube/videoId"
import * as React from "react"

type VideoInfoViewModel = {|
  videoLink: ?Link,
  actual: TableColumn,
  scheduled: TableColumn,
  secondsBehindSchedule: string,
  timeRemainingInVideo: string,
|}

type Link = {|
  href: string,
  text: string,
|}

type TableColumn = {|
  video: string,
  playerState: string,
  currentTime: string,
|}

function viewModel({ broadcast, player }): VideoInfoViewModel {
  const hms = (seconds) => hoursMinutesSeconds(seconds, 2)

  return {
    videoLink:
      broadcast.type === "video"
        ? {
            text: broadcast.videoTitle,
            href: "https://youtube.com/watch?v=" + broadcast.videoId,
          }
        : null,
    actual: {
      video: player.videoId ?? "",
      playerState: stateString(player.state),
      currentTime: player.time != null ? hms(player.time) : "-",
    },
    scheduled: {
      video: broadcast.type === "video" ? broadcast.videoId : "-",
      playerState: broadcast.type,
      currentTime:
        broadcast.type === "video" ? hms(broadcast.currentTime) : "-",
    },
    secondsBehindSchedule:
      broadcast.type === "video" && player.time != null
        ? (broadcast.currentTime - player.time).toFixed(2)
        : "-",
    timeRemainingInVideo:
      player.duration != null && player.time != null
        ? hms(player.duration - player.time)
        : "-",
  }
}

export function VideoInfo(props: {|
  broadcast: Broadcast,
  player: PlayerStatus,
  onClose: () => mixed,
|}): React.Node {
  const { broadcast, player, onClose } = props
  const vm = viewModel({ broadcast, player })
  return (
    <>
      <button class="close-button" onClick={onClose}>
        close
      </button>
      <h1>Culture Machine</h1>
      <p>
        Made by <a href="https://github.com/benchristel">Ben Christel</a>.{" "}
        <a href="https://github.com/benchristel/tv">Source code here</a>. Some
        rights reserved. See the{" "}
        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">license</a>.
      </p>
      <hr />
      <h2>Video Info</h2>
      <p
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Now playing:{" "}
        {vm.videoLink ? (
          <a href={vm.videoLink.href}>{vm.videoLink.text}</a>
        ) : (
          "-"
        )}
      </p>
      <table>
        <thead>
          <tr>
            <td></td>
            <th scope="col">actual</th>
            <th scope="col">scheduled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">video</th>
            <td>{vm.actual.video}</td>
            <td>{vm.scheduled.video}</td>
          </tr>
          <tr>
            <th scope="row">player state</th>
            <td>{vm.actual.playerState}</td>
            <td>{vm.scheduled.playerState}</td>
          </tr>
          <tr>
            <th scope="row">current time</th>
            <td>{vm.actual.currentTime}</td>
            <td>{vm.scheduled.currentTime}</td>
          </tr>
        </tbody>
      </table>
      <p>Seconds behind schedule: {vm.secondsBehindSchedule}</p>
      <p>Time remaining in video: {vm.timeRemainingInVideo}</p>
    </>
  )
}
