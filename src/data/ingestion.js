// @flow
import type {Video} from "./types"
import {test, expect, is, equals, not} from "@benchristel/taste"

export function parseVideos(raw: string): Array<Video> {
    return raw.split(/\n+/)
        .map(trim)
        .filter(not(isComment))
        .filter(not(isEmpty))
        .map(split(/ +/, 3))
        .map(([videoId, rawDuration, title]) => ({
            videoId,
            durationSeconds: parseDuration(rawDuration),
            title,
        }))
}

test("parseVideos", {
    "empty string"() {
        expect(parseVideos(""), equals, [])
    },
    "spaces"() {
        expect(parseVideos("  "), equals, [])
    },
    "newlines"() {
        expect(parseVideos("\n\n\n"), equals, [])
    },
    "newlines and spaces"() {
        expect(parseVideos(" \n \n \n"), equals, [])
    },
    "comments"() {
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
            {videoId: "leb645Xu6uo", durationSeconds: 654, title: "Captain Murderer - Emlyn Williams"},
            {videoId: "Ga8tNxnHjt4", durationSeconds: 181, title: "Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971"},
        ])
    }
})

function isComment(line) {
    return line.startsWith("#")
}

function parseDuration(raw: string) {
    const multipliers = [1, 60, 3600, 86400]
    const parts = raw.split(":").map(n => parseInt(n, 10)).reverse()
    return zip(parts, multipliers).map(([p, m]) => p * m).reduce(add, 0)
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
})

function trim(s) {
    return s.trim()
}


function isEmpty(s) {
    return s.length === 0
}

const split = (delim, limit=Infinity) => (s) => {
    if (typeof delim === "string" && delim.length === 0) {
        throw "split(): empty delimiter not supported"
    }
    let matchStart = 0, matchEnd = 0
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
    "limit"() {
        expect(split(" ", 2)("a b c"), equals, ["a", "b c"])
    },
    "regex"() {
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