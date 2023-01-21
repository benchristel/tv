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
      <button className="close-button" onClick={onClose}>
        close
      </button>
      <h1>Culture Machine</h1>
      <p>
        Made by <a href="https://github.com/benchristel">Ben Christel</a>.{" "}
        <a href="https://github.com/benchristel/tv">Source code here</a>. Some
        rights reserved. See the{" "}
        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">license</a>.
      </p>
      <p>
        <a href="javascript:(function()%7Bfunction%20last(e)%7Breturn%20e%5Be.length-1%5D%7Dvideos%3D%2F%5C%2Fwatch%5C%3F%2F.test(window.location)%3F%5B%2Fv%3D(.%7B11%7D)%2F.exec(window.location)%3F.%5B1%5D%2Clast(document.querySelectorAll(%22.ytp-time-duration%22)).innerText.trim()%2Cdocument.querySelector(%22.title%20.ytd-video-primary-info-renderer%22).innerText.split(%22%5Cn%22)%5B0%5D.trim()%5D.join(%22%20%22)%3A%2F%5C%2Fplaylist%5C%3F%2F.test(window.location)%3F%5B...document.querySelectorAll(%22ytd-playlist-video-renderer%22)%5D.map((e%3D%3E%7Bconst%20t%3De.querySelector(%22a%23video-title%22)%3F.href%3F%3F%22%22%2Cr%3D%2Fv%3D(.%7B11%7D)%2F.exec(t)%3F.%5B1%5D%2Ci%3De.querySelector(%22span%23text.ytd-thumbnail-overlay-time-status-renderer%22)%3F.innerText.trim()%2Cn%3De.querySelector(%22%23video-title%22)%3F.innerText%3Breturn%60%24%7Br%7D%20%24%7Bi%7D%20%24%7Bn%7D%60%7D)).join(%22%5Cn%22)%3A%5B...document.querySelectorAll(%22ytd-rich-grid-media%22)%5D.map((e%3D%3E%7Bconst%20t%3De.querySelector(%22%23thumbnail%22)%3F.href%3F%3F%22%22%2Cr%3D%2Fv%3D(.%7B11%7D)%2F.exec(t)%3F.%5B1%5D%2Ci%3De.querySelector(%22span%23text.ytd-thumbnail-overlay-time-status-renderer%22)%3F.innerText.trim()%2Cn%3De.querySelector(%22%23video-title%22)%3F.innerText%3Breturn%60%24%7Br%7D%20%24%7Bi%7D%20%24%7Bn%7D%60%7D)).join(%22%5Cn%22)%2Cconsole.log(videos)%2Cnavigator.clipboard.writeText(videos).catch((e%3D%3Econsole.error(e)))%3B%7D)()">
          Bookmarklet to scrape videos from YouTube
        </a>
        {" "}
        (<a href="https://github.com/benchristel/tv#what-is-a-bookmarklet">What's this?</a>)
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
