// @flow

import type { Episode } from "./types"

import { parseVideos } from "./ingestion"
import { expect, is, test } from "@benchristel/taste"

const pipe: $ComposeReverse = ((...fns) => {
  return fns.reduce(rcompose)
}: any)

export const albums: Array<Episode> = map(
  pipe(parseVideos, (v) => ({ videos: v }))
)([
  //   `BecZdQvjGrY 54:49 In Gowan Ring - Compendium (Full Album)`,
  //   `B3oAx9VmAdA 43:52 In Gowan Ring - Hazel Steps Through A Weathered Home`,
  `
    # In Gowan Ring - The Glinting Spade
    GCglHYJb2Yk 5:34 Two Wax Dolls
    W-gm4QANx0k 4:04 To Thrum a Glassy Stem
    O-gx9ILQogw 13:07 Cipher's String on the Tree in the Dream of the Queen
    scqjzDhXIxA 6:20 Bow Star
    GgIWODOVlOI 6:58 A Bee at the Dolmen's Dell
    ZXK1NYbjozk 8:04 Arrowsmith's Fire
    2LjJzCTfaPo 12:31 Milk Star
  `,
  `
    # In Gowan Ring - The Twin Trees
    UT_RFFLZQt0 7:43 In Gowan Ring – Rivertime Tome
    PKAq679Y4Dc 8:50 In Gowan Ring – One Silver Ring
    qAHUytdB9dg 6:29 In Gowan Ring – Stone Song III
    Fh3u050071M 6:38 In Gowan Ring – The Twin Trees
    wSHJj79wUhY 10:18 In Gowan Ring – Lady Beyond The River
    pxLzMC3LxI4 11:00 In Gowan Ring – By Moss Strand And Waterspathe
    MsnojV6lHPI 10:49 In Gowan Ring – Cupped Hands Spell
    -qfgGOMmwLo 6:25 In Gowan Ring – Our Rainbowed Paradox
    JBasAvPr08c 7:10 In Gowan Ring – Still Water Bonne
  `,
  `
    # In Gowan Ring - Love Charms
    ljm3wcEUeIc 4:23 In Gowan Ring – Listen To Colours
    9WnXQBigyWw 2:39 In Gowan Ring – Love Charms
    Fx7MoHH72lA 5:11 In Gowan Ring – Spindle Tree (With Dreambox)
    OqWS_5JFHn0 3:00 In Gowan Ring – A Swan Song
    FM-YvrTrPz8 4:41 In Gowan Ring – Stone Song II
    kMB5zA_klZE 2:07 In Gowan Ring – Dandelion Wine
    w_u8WsgzNnU 9:04 In Gowan Ring – Within Rings (With Dreambox)
    uAA4rUuZ-IA 6:37 In Gowan Ring – Of Water Wiverings
    LAzCskIPtuc 15:01 In Gowan Ring – Urn And Water
  `,
  //   `i0djHJBAP3U 1:18:43 Huun-Huur-Tu - Live Berkely`,
])

test("pipe", {
  "given one function"() {
    const inc = (x) => x + 1
    expect(pipe(inc)(1), is, 2)
  },

  "given two functions"() {
    const inc = (x) => x + 1
    expect(pipe(inc, inc)(1), is, 3)
  },
})

function rcompose<T, U, V>(f: (T) => U, g: (U) => V): (T) => V {
  return (...args) => g(f(...args))
}

function map<T, U>(f: (T) => U): (Array<T>) => Array<U> {
  return (array) => array.map(f)
}
