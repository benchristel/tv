// @flow
import type { Broadcast } from "./Broadcast"
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
      video: videoIdFromUrl(player.getVideoUrl()) ?? "",
      playerState: stateString(player.getPlayerState()),
      currentTime: hms(player.getCurrentTime() || NaN),
    },
    scheduled: {
      video: broadcast.type === "video" ? broadcast.videoId : "-",
      playerState: broadcast.type,
      currentTime:
        broadcast.type === "video" ? hms(broadcast.currentTime) : "-",
    },
    secondsBehindSchedule:
      broadcast.type === "video"
        ? (broadcast.currentTime - player.getCurrentTime()).toFixed(2)
        : "-",
    timeRemainingInVideo: hms(player.getDuration() - player.getCurrentTime()),
  }
}

export function VideoInfo(props: {|
  broadcast: Broadcast,
  player: Player,
|}): React.Node {
  const vm = viewModel(props)
  return (
    <>
      <h1>Culture Machine</h1>
      <p>
        Mainly tended by{" "}
        <a href="https://github.com/benchristel">Ben Christel</a>.{" "}
        <a href="https://github.com/benchristel/tv">Source code here</a>. Some
        rights reserved. See the{" "}
        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">license</a>.
      </p>
      <hr />
      <h2>Video Info</h2>
      <p>
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
