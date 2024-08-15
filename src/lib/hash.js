import { expect, equals, test } from "@benchristel/taste"

export function cyrb128(str/* FIXME : string */)/* FIXME : [number, number, number, number] */ {
  let h1 = 1779033703,
    h2 = 3144134277,
    h3 = 1013904242,
    h4 = 2773480762
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i)
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067)
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233)
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213)
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179)
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067)
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233)
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213)
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179)
  return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
}

test("cyrb128_32", {
  "hashes unix timestamps to random-looking values"() {
    expect(
      cyrb128("1661673600"),
      equals,
      [1866196007,1194674827, 898714046, 497018642],
    )
    expect(
      cyrb128("1661760000"),
      equals,
      [3655929289, 901600698, 732811234, 3355023249],
    )
    expect(
      cyrb128("1661846400"),
      equals,
      [2165297363, 2940322590, 3636107238, 4143219755],
    )
  },
})
