// @flow

import { test, expect, is } from "@benchristel/taste";

export type Video = {|
  videoId: string,
  segments: Array<Segment>,
  title: string,
|}

export type Segment = {|
  start: number,
  end: number
|}

export type Episode = {|
  videos: Array<Video>,
|}

export function episode(videos: Array<Video>): Episode {
  return {videos}
}

export function duration({start, end}: Segment): number {
  return end - start
}

export function videoDuration(video: Video): number {
  return video.segments.map(duration).reduce(add, 0)
}

test("duration", {
  "is the difference between the segment's start and end"() {
    expect(duration({start: 50, end: 99}), is, 49)
  }
})

test("videoDuration", {
  "is the sum of the segment durations"() {
    const video = {
      videoId: "",
      title: "",
      segments: [
        {start: 1, end: 5}, // 4 seconds
        {start: 10, end: 13}, // 3 seconds
      ],
    }
    expect(videoDuration(video), is, 7)
  }
})

const add = (a, b) => a + b