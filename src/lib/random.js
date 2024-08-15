import { expect, is, equals, test } from "@benchristel/taste"

export function sfc32(a/* FIXME : number */, b/* FIXME : number */, c/* : number */, d/* : number */)/* : () => number */ {
  function rng() {
    a |= 0; b |= 0; c |= 0; d |= 0
    var t = (a + b | 0) + d | 0
    d = d + 1 | 0
    a = b ^ b >>> 9
    b = c + (c << 3) | 0
    c = c << 21 | c >>> 11
    c = c + t | 0
    return (t >>> 0) / 4294967296
  }
  // Skip the first few outputs; they're not very random because the state
  // hasn't been sufficiently mixed yet.
  for (let i = 0; i < 20; i++) {
    rng()
  }
  return rng
}

export function randomIntInRange(low/* FIXME : number */, high/* : number */, rng/* : () => number */)/* : number */ {
  return low + Math.floor(rng() * (high + 1 - low))
}

test("sfc32", {
  "flips coins fairly"() {
    let heads = 0
    let tails = 0
    const rng = sfc32(0, 0, 0, 0)
    for (let i = 0; i < 200; i++) {
      if (rng() < 0.5) {
        heads++
      } else {
        tails++
      }
    }
    expect(heads - tails, is, -8)
  },

  "generates a reasonably uniform distribution of numbers"() {
    const generated = new Set()
    const rng = sfc32(0, 0, 0, 0)
    for (let i = 0; i < 100; i++) {
      generated.add(Math.floor(rng() * 10000))
    }
    expect(generated.size, is, 99)
  },
})

test("randomIntInRange", {
  "when low and high are the same"() {
    expect(randomIntInRange(3, 3, Math.random), is, 3)
  },

  "when low and high are 1 apart"() {
    const results = new Set()
    for (let i = 0; i < 30; i++) {
      results.add(randomIntInRange(0, 1, Math.random))
    }
    expect(results, equals, new Set([0, 1]))
  },
})
