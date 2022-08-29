// @flow

import { expect, is, test } from "@benchristel/taste"

export function mulberry32(a: number): () => number {
  return function () {
    var t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

test("mulberry32", {
  "flips coins fairly"() {
    let heads = 0
    let tails = 0
    const rng = mulberry32(0)
    for (let i = 0; i < 200; i++) {
      if (rng() < 0.5) {
        heads++
      } else {
        tails++
      }
    }
    expect(heads - tails, is, 12)
  },

  "generates a reasonably uniform distribution of numbers"() {
    const generated = new Set()
    const rng = mulberry32(0)
    for (let i = 0; i < 100; i++) {
      generated.add(Math.floor(rng() * 10000))
    }
    expect(generated.size, is, 99)
  },
})
