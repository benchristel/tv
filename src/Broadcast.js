// @flow
export type Broadcast =
  | {| type: "nothing", nextVideoId: string |}
  | {|
      type: "video",
      videoId: string,
      videoTitle: string,
      currentTime: number,
    |}

export function nothing(nextVideoId: string = ""): Broadcast {
  return { type: "nothing", nextVideoId }
}
