// @flow

import { test, expect, is } from "@benchristel/taste";

export type Video = {|
  videoId: string,
  timeWindow: {start: number, end: number},
  title: string,
|}

export type Episode = {|
  videos: Array<Video>,
|}

export type Show = {|
  weight: number,
  timeslot: Range<number>, // seconds after midnight
  episodes: Array<Episode>,
|}

export function duration(video: Video): number {
  return video.timeWindow.end - video.timeWindow.start
}

test("duration", {
  "is the difference between the timeWindow's start and end"() {
    const video = {
      videoId: "",
      title: "",
      timeWindow: {start: 50, end: 99}
    }
    expect(duration(video), is, 49)
  }
})