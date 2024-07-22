// @flow
export type Broadcast =
  | {|
      type: "nothing",
      nextVideoId: string,
      nextVideoStartTimestamp: number,
    |}
  | {|
      type: "video",
      videoId: string,
      videoTitle: string,
      currentTime: number,
    |}

export function nothing(nextVideoId: string = "", nextVideoStartTimestamp: number = 0): Broadcast {
  return {
    type: "nothing",
    nextVideoId,
    nextVideoStartTimestamp
  }
}
