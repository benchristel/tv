// export type Broadcast =
//   | {|
//       type: "nothing",
//       nextVideoId: string,
//       nextVideoStartTimestamp: number,
//     |}
//   | {|
//       type: "video",
//       videoId: string,
//       videoTitle: string,
//       currentTime: number,
//     |}
// FIXME

export function nothing(nextVideoId/* FIXME : string = ""*/, nextVideoStartTimestamp/*: number = 0 */)/* FIXME : Broadcast */ {
  return {
    type: "nothing",
    nextVideoId,
    nextVideoStartTimestamp
  }
}
