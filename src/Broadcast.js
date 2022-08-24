// @flow
export type Broadcast =
  | {| type: "nothing", nextVideoId: string |}
  | {| type: "video", videoId: string, currentTime: number |}

export function broadcastString(broadcast: Broadcast): string {
  switch (broadcast.type) {
    case "nothing":
      return `nothing:${broadcast.nextVideoId}:${Math.random()}`
    case "video":
      return `video:${broadcast.videoId}:${broadcast.currentTime}`
    default:
      ;(broadcast.type: empty)
      return ""
  }
}
