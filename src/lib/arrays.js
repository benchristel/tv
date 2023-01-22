// @flow
import { errorThrownFrom } from "./testing"
import { equals, expect, test, is } from "@benchristel/taste"

export function pick<T>(array: Array<T>, fraction: number): T {
  if (array.length === 0) {
    throw new Error("can't pick element from an empty array")
  }
  if (fraction >= 1 || fraction < 0) {
    throw new Error("fraction out of bounds: " + fraction)
  }
  return array[Math.floor(fraction * array.length)]
}

test("pick", {
  "throws if the array is empty"() {
    expect(
      errorThrownFrom(() => pick([], 0)),
      equals,
      new Error("can't pick element from an empty array")
    )
  },

  "throws if the fraction is 1"() {
    expect(
      errorThrownFrom(() => pick([""], 1)),
      equals,
      new Error("fraction out of bounds: 1")
    )
  },

  "throws if the fraction is > 1"() {
    expect(
      errorThrownFrom(() => pick([""], 1.25)),
      equals,
      new Error("fraction out of bounds: 1.25")
    )
  },

  "throws if the fraction is > 0"() {
    expect(
      errorThrownFrom(() => pick([""], -0.25)),
      equals,
      new Error("fraction out of bounds: -0.25")
    )
  },

  "picks the first element of the array given 0"() {
    expect(pick([1, 2], 0), is, 1)
  },

  "picks the last element of the array given 1 - epsilon"() {
    expect(pick([1, 2], 0.99), is, 2)
  },
})

export function isEmpty(s: string | $ReadOnlyArray<mixed>): boolean {
  return s.length === 0
}