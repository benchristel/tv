import type { Player, PlayerStateCode } from "./youtube/player"
import { videoIdFromUrl } from "./youtube/videoId"

export type PlayerStatus = {
  state: PlayerStateCode,
  // TODO: these types can probably be narrowed down
  videoId: string | null | undefined,
  time: number | null | undefined, // seconds elapsed in the video
  duration: number | null | undefined,
}

export function status(player: Player): PlayerStatus {
  return {
    state: player.getPlayerState(),
    videoId: videoIdFromUrl(player.getVideoUrl()),
    time: player.getCurrentTime(),
    duration: player.getDuration(),
  }
}
