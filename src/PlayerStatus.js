// @flow
import type { Player, PlayerStateCode } from "./youtube/player.jsx"
import { videoIdFromUrl } from "./youtube/videoId"

export type PlayerStatus = {|
  state: PlayerStateCode,
  videoId: ?string,
  time: ?number, // seconds elapsed in the video
  duration: ?number,
|}

export function status(player: Player): PlayerStatus {
  return {
    state: player.getPlayerState(),
    videoId: videoIdFromUrl(player.getVideoUrl()),
    time: player.getCurrentTime(),
    duration: player.getDuration(),
  }
}
