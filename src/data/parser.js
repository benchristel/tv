// @flow
import type { Episode, Segment, Video } from "../video/types";
import { test, expect, is, equals, not } from "@benchristel/taste"
import {
  parseVideos,
  range,
  entireVideo,
  parseDuration,
  split,
  parseEpisodes,
  allEpisodes,
} from "./parser.impl"

import type { ChannelModule } from "../data/types";
export {
  allEpisodes,
  entireVideo,
  range,
} from "./parser.impl"

;(allEpisodes: (ChannelModule) => Array<Episode>)
;(entireVideo: (duration: number) => Segment)
;(range: (start: number, end: number) => Segment)

test("parseVideos", {
  "handles empty string"() {
    expect(parseVideos(""), equals, [])
  },

  "ignores spaces"() {
    expect(parseVideos("  "), equals, [])
  },

  "ignores blank links"() {
    expect(parseVideos("\n\n\n"), equals, [])
  },

  "ignores space-only lines"() {
    expect(parseVideos(" \n \n \n"), equals, [])
  },

  "strips comments"() {
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
        segments: [{start: 0, end: 654}],
        title: "Captain Murderer - Emlyn Williams",
      },
      {
        videoId: "Ga8tNxnHjt4",
        segments: [{start: 0, end: 181}],
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
        segments: [{start: 61, end: 300}],
        title: "The Title",
      },
    ])
  },

  "parses a video with multiple segments"() {
    const data = `
      leb645Xu6uo 1-3:00,10:00-11:01 The Title
    `
    expect(parseVideos(data), equals, [
      {
        videoId: "leb645Xu6uo",
        segments: [
          {start: 1, end: 180},
          {start: 600, end: 661},
        ],
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
        segments: [{start: 0, end: 654}],
        title: "Captain Murderer - Emlyn Williams",
      },
    ])
  },
})

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
