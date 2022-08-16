// @flow
export type Broadcast =
  | {| type: "nothing" |}
  | {| type: "video", videoId: string, currentTime: number |}

export function broadcastString(broadcast: Broadcast): string {
  switch (broadcast.type) {
    case "nothing":
      return "nothing"
    case "video":
      return `video:${broadcast.videoId}:${broadcast.currentTime}`
    default:
      ;(broadcast.type: empty)
      return ""
  }
}
