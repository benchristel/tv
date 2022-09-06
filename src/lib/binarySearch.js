// @flow

import { errorThrownFrom } from "./testing"
import { equals, expect, is, test } from "@benchristel/taste"

// Returns the last ("rightmost") element of the array for which isLeftOfTarget is true.
export function binarySearch<T>(
  a: Array<T>,
  isLeftOfTarget: (T) => boolean
): ?T {
  let firstPossible = -1
  let lastPossible = a.length - 1
  while (firstPossible < lastPossible) {
    const testee = mid(firstPossible, lastPossible)
    if (isLeftOfTarget(a[testee])) {
      firstPossible = testee
    } else {
      lastPossible = testee - 1
    }
  }
  return a[firstPossible]
}

function mid(left, right) {
  return Math.ceil((left + right) / 2)
}

test("binarySearch", {
  "returns undefined given an empty array"() {
    expect(
      binarySearch([], () => false),
      is,
      undefined
    )
  },

  "returns an element that is to the left of the target"() {
    expect(
      binarySearch([1], () => true),
      is,
      1
    )
  },

  "returns undefined when the only element is not left of the target"() {
    expect(
      binarySearch([1], () => false),
      is,
      undefined
    )
  },

  "returns the rightmost element that is left of the target"() {
    expect(
      binarySearch([1, 2, 3, 4], (x) => x <= 2.5),
      is,
      2
    )
  },

  "works with duplicates"() {
    expect(
      binarySearch([0, 1, 2, 3, 0, 0, 0, 0, 0], (x) => x > 0),
      is,
      3
    )
  },

  "works with two elements"() {
    expect(
      binarySearch([1, 2], (x) => x <= 1.5),
      is,
      1
    )
    expect(
      binarySearch([1, 2], (x) => x <= 2),
      is,
      2
    )
  },

  "works with three elements"() {
    expect(
      binarySearch([1, 2, 3], (x) => x <= 1.5),
      is,
      1
    )
    expect(
      binarySearch([1, 2, 3], (x) => x <= 2),
      is,
      2
    )
    expect(
      binarySearch([1, 2, 3], (x) => x <= 3),
      is,
      3
    )
  },

  "works with four elements"() {
    expect(
      binarySearch([1, 2, 3, 4], (x) => x <= 1.5),
      is,
      1
    )
    expect(
      binarySearch([1, 2, 3, 4], (x) => x <= 2),
      is,
      2
    )
    expect(
      binarySearch([1, 2, 3, 4], (x) => x <= 3),
      is,
      3
    )
    expect(
      binarySearch([1, 2, 3, 4], (x) => x <= 4),
      is,
      4
    )
  },

  "works with five elements"() {
    expect(
      binarySearch([1, 2, 3, 4, 5], (x) => x <= 1.5),
      is,
      1
    )
    expect(
      binarySearch([1, 2, 3, 4, 5], (x) => x <= 2),
      is,
      2
    )
    expect(
      binarySearch([1, 2, 3, 4, 5], (x) => x <= 3),
      is,
      3
    )
    expect(
      binarySearch([1, 2, 3, 4, 5], (x) => x <= 4),
      is,
      4
    )
    expect(
      binarySearch([1, 2, 3, 4, 5], (x) => x <= 5),
      is,
      5
    )
  },
})
