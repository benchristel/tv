// @flow
import type { Episode, Video } from "./types";
import { isEmpty } from "../lib/arrays";
import { map, pipe } from "../lib/fns";
import { trim } from "../lib/strings";
import { test, expect, is, equals, not } from "@benchristel/taste"

export const parseEpisodes: (Array<string>) => Array<Episode>
  = map(pipe(parseVideos, episode))

export function episode(videos: Array<Video>): Episode {
  return {videos}
}

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
              timeWindow: parseTimeWindow(rawTimeWindow),
              title,
            },
          ]
    )
}

export function entireVideo(duration: number): Video["timeWindow"] {
  return {start: 0, end: duration}
}

export function range(start: number, end: number): Video["timeWindow"] {
  return {start, end}
}

test("parseVideos", {
  "empty string"() {
    expect(parseVideos(""), equals, [])
  },
  spaces() {
    expect(parseVideos("  "), equals, [])
  },
  newlines() {
    expect(parseVideos("\n\n\n"), equals, [])
  },
  "newlines and spaces"() {
    expect(parseVideos(" \n \n \n"), equals, [])
  },
  comments() {
    expect(parseVideos("#foo\n# bar"), equals, [])
  },
  "strips spaces before comments"() {
    expect(parseVideos("  #foo\n  # bar"), equals, [])
  },
  "parses actual data"() {
    const data = `
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
      Ga8tNxnHjt4 3:01 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
    `
    expect(parseVideos(data), equals, [
      {
        videoId: "leb645Xu6uo",
        timeWindow: {start: 0, end: 654},
        title: "Captain Murderer - Emlyn Williams",
      },
      {
        videoId: "Ga8tNxnHjt4",
        timeWindow: {start: 0, end: 181},
        title: "Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971",
      },
    ])
  },
  "parses time ranges"() {
    const data = `
      leb645Xu6uo 1:01-5:00 The Title
    `
    expect(parseVideos(data), equals, [
      {
        videoId: "leb645Xu6uo",
        timeWindow: {start: 61, end: 300},
        title: "The Title",
      },
    ])
  },
  "removes shorts"() {
    const data = `
      undefined SHORTS blah blah
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
    `
    expect(parseVideos(data), equals, [
      {
        videoId: "leb645Xu6uo",
        timeWindow: {start: 0, end: 654},
        title: "Captain Murderer - Emlyn Williams",
      },
    ])
  },
})

function isComment(line) {
  return line.startsWith("#")
}

function parseTimeWindow(raw: string) {
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

function parseDuration(raw: string) {
  const multipliers = [1, 60, 3600, 86400]
  const parts = raw
    .split(":")
    .map((n) => parseInt(n, 10))
    .reverse()
  return zip(parts, multipliers)
    .map(([p, m]) => p * m)
    .reduce(add, 0)
}

test("parseDuration", {
  "0:00"() {
    expect(parseDuration("0:00"), is, 0)
  },
  "00:00"() {
    expect(parseDuration("00:00"), is, 0)
  },
  "1 second"() {
    expect(parseDuration("0:01"), is, 1)
  },
  "10 seconds"() {
    expect(parseDuration("0:10"), is, 10)
  },
  "1 minute"() {
    expect(parseDuration("1:00"), is, 60)
  },
  "1 minute 10 seconds"() {
    expect(parseDuration("1:10"), is, 70)
  },
  "10 minutes 10 seconds"() {
    expect(parseDuration("10:10"), is, 610)
  },
  "1 hour"() {
    expect(parseDuration("1:00:00"), is, 3600)
  },
  "1 hour 1 second"() {
    expect(parseDuration("1:00:01"), is, 3601)
  },
  "10 hours 1 second"() {
    expect(parseDuration("10:00:01"), is, 36001)
  },
  "1 day 1 second"() {
    expect(parseDuration("1:0:00:01"), is, 86401)
  },
})

const split =
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

test("split", {
  "empty string"() {
    expect(split(" ")(""), equals, [""])
  },
  "no limit"() {
    expect(split(" ")("a b c"), equals, ["a", "b", "c"])
  },
  limit() {
    expect(split(" ", 2)("a b c"), equals, ["a", "b c"])
  },
  regex() {
    expect(split(/ +/)("a b   c"), equals, ["a", "b", "c"])
  },
})

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
