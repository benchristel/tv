// @flow
import type { Broadcast } from "./Broadcast"
import type { Player } from "./youtube/player.jsx"
import { stateString } from "./PlayerStateView.jsx"
import { hoursMinutesSeconds } from "./lib/time"
import { videoIdFromUrl } from "./youtube/videoId"
import * as React from "react"

export function VideoInfo(props: {|
  broadcast: Broadcast,
  player: Player,
|}): React.Node {
  const { player, broadcast } = props
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
        {broadcast.type === "video" ? (
          <a href={"https://youtube.com/watch?v=" + broadcast.videoId}>
            {broadcast.videoTitle}
          </a>
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
            <td>{videoIdFromUrl(player.getVideoUrl())}</td>
            <td>{broadcast.type === "video" ? broadcast.videoId : "-"}</td>
          </tr>
          <tr>
            <th scope="row">player state</th>
            <td>{stateString(player.getPlayerState())}</td>
            <td>{broadcast.type}</td>
          </tr>
          <tr>
            <th scope="row">current time</th>
            <td>{hoursMinutesSeconds(player.getCurrentTime() || NaN, 2)}</td>
            <td>
              {broadcast.type === "video"
                ? hoursMinutesSeconds(broadcast.currentTime, 2)
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Seconds behind schedule:{" "}
        {broadcast.type === "video"
          ? (broadcast.currentTime - player.getCurrentTime()).toFixed(2)
          : "-"}
      </p>
      <p>
        Time remaining in video:{" "}
        {hoursMinutesSeconds(player.getDuration() - player.getCurrentTime(), 2)}
      </p>
    </>
  )
}
