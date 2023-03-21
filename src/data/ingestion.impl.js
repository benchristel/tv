// @flow

import type { Episode, Segment, Video } from "./types";
import { isEmpty } from "../lib/arrays";
import { map, pipe } from "../lib/fns";
import { trim } from "../lib/strings";
import { not } from "@benchristel/taste";

export const parseEpisodes: (Array<string>) => Array<Episode>
  = map(pipe(parseVideos, episode))

export function parseVideos(raw: string): Array<Video> {
  return raw
    .split(/\n+/)
    .map(trim)
    .filter(not(isComment))
    .filter(not(isEmpty))
    .map(split(/ +/, 3))
    .flatMap(([videoId, rawTimeWindow, title]) =>
      rawTimeWindow === "SHORTS"
        ? []
        : [
            {
              videoId,
              segments: parseSegments(rawTimeWindow),
              title,
            },
          ]
    )
}

export function episode(videos: Array<Video>): Episode {
  return {videos}
}

export function entireVideo(duration: number): Segment {
  return {start: 0, end: duration}
}

export function range(start: number, end: number): Segment {
  return {start, end}
}

function isComment(line) {
  return line.startsWith("#")
}

function parseSegments(raw: string): Array<Segment> {
  return raw.split(",").map(parseSegment)
}

function parseSegment(raw: string): Segment {
  const parts = raw.split("-")
  if (parts.length === 1) {
    return entireVideo(parseDuration(parts[0]))
  } else {
    return range(
      parseDuration(parts[0]),
      parseDuration(parts[1]),
    )
  }
}

export function parseDuration(raw: string): number {
  const multipliers = [1, 60, 3600, 86400]
  const parts = raw
    .split(":")
    .map((n) => parseInt(n, 10))
    .reverse()
  return zip(parts, multipliers)
    .map(([p, m]) => p * m)
    .reduce(add, 0)
}

export const split: (string | RegExp, limit?: number) => (string) => Array<string> =
  (delim, limit = Infinity) =>
  (s) => {
    if (typeof delim === "string" && delim.length === 0) {
      throw "split(): empty delimiter not supported"
    }
    let matchStart = 0,
      matchEnd = 0
    const parts = []
    let rest = s
    while (parts.length < limit - 1 && rest.length > 0) {
      const match = rest.match(delim)
      if (match == null) {
        break
      }
      parts.push(rest.slice(0, match.index))
      rest = rest.slice(match.index + match[0].length)
    }
    parts.push(rest)
    return parts
  }

function zip(a, b) {
  const ret = []
  for (let i = 0; i < a.length && i < b.length; i++) {
    ret.push([a[i], b[i]])
  }
  return ret
}

function add(a, b) {
  return a + b
}