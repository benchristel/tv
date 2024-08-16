// FIXME
import type { Episode, Segment, Video } from "../video";
import type { ChannelModule } from "./types";
import { isEmpty } from "../lib/arrays";
import { map, pipe } from "../lib/fns";
import { trim } from "../lib/strings";
import { not } from "@benchristel/taste";
import { episode } from "../video";

export function allEpisodes({videos, episodes}: ChannelModule): Array<Episode> {
  return [
    ...parseEpisodes(episodes),
    ...parseVideos(videos).map(singleVideoEpisode),
  ]
}

export const parseEpisodes: (raw: Array<string>) => Array<Episode>
  = map(pipe(parseVideos, episode))

export function parseVideos(raw: string): Array<Video> {
  const s = raw
    .split(/\n+/)
    .map(trim)
    .filter(not(isComment))
    .filter(not(isEmpty))
    .map(line => split(/ +/, line, 3))
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
  return s
}

export function singleVideoEpisode(v: Video): Episode {
  return episode([v])
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

export function split(delim: string | RegExp, s: string, limit: number = Infinity): Array<string> {
  if (typeof delim === "string" && delim.length === 0) {
    throw "split(): empty delimiter not supported"
  }
  const parts: string[] = []
  let rest = s
  while (parts.length < limit - 1 && rest.length > 0) {
    const match = rest.match(delim)
    if (match == null) {
      break
    }
    parts.push(rest.slice(0, match.index))
    rest = rest.slice((match.index ?? 0) + match[0].length)
  }
  parts.push(rest)
  return parts
}

function zip<T, U>(a: T[], b: U[]): [T, U][] {
  const ret: [T, U][] = []
  for (let i = 0; i < a.length && i < b.length; i++) {
    const tuple: [T, U] = [a[i], b[i]]
    ret.push(tuple)
  }
  return ret
}

function add(a, b) {
  return a + b
}