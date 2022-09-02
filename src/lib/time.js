// @flow
import { expect, is, test } from "@benchristel/taste"

export function debugTimestamp(): string {
  return ((+new Date() % 1000000) / 1000).toFixed(3)
}

export function hoursMinutesSeconds(
  seconds: number,
  decimals: number = 0
): string {
  if (isNaN(seconds) || seconds === Infinity || seconds === -Infinity) {
    return "--:--"
  }

  if (seconds < 0) {
    return "-" + formatPositiveHoursMinutesSeconds(-seconds, decimals)
  } else {
    return formatPositiveHoursMinutesSeconds(seconds, decimals)
  }
}

function formatPositiveHoursMinutesSeconds(seconds, decimals) {
  function pad(n, format = identity) {
    return (n < 10 ? "0" : "") + format(n)
  }

  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  return h > 0
    ? `${h}:${pad(m)}:${pad(s, toFixed(decimals))}`
    : `${m}:${pad(s, toFixed(decimals))}`
}

test("hoursMinutesSeconds", {
  "formats NaN"() {
    expect(hoursMinutesSeconds(0 / 0), is, "--:--")
  },

  "formats Infinities"() {
    expect(hoursMinutesSeconds(Infinity), is, "--:--")
    expect(hoursMinutesSeconds(-Infinity), is, "--:--")
  },

  "formats negative numbers"() {
    expect(hoursMinutesSeconds(-1), is, "-0:01")
    expect(hoursMinutesSeconds(-3661.12, 2), is, "-1:01:01.12")
  },

  "formats single-digit seconds with leading zero"() {
    expect(hoursMinutesSeconds(0), is, "0:00")
    expect(hoursMinutesSeconds(1), is, "0:01")
    expect(hoursMinutesSeconds(9), is, "0:09")
  },

  "formats double-digit seconds"() {
    expect(hoursMinutesSeconds(10), is, "0:10")
    expect(hoursMinutesSeconds(59), is, "0:59")
  },

  "formats minutes"() {
    expect(hoursMinutesSeconds(60), is, "1:00")
    expect(hoursMinutesSeconds(61), is, "1:01")
    expect(hoursMinutesSeconds(119), is, "1:59")
    expect(hoursMinutesSeconds(120), is, "2:00")
    expect(hoursMinutesSeconds(3599), is, "59:59")
  },

  "formats hours"() {
    expect(hoursMinutesSeconds(3600), is, "1:00:00")
    expect(hoursMinutesSeconds(7200), is, "2:00:00")
    expect(hoursMinutesSeconds(3661), is, "1:01:01")
    expect(hoursMinutesSeconds(3610), is, "1:00:10")
    expect(hoursMinutesSeconds(3600 + 600), is, "1:10:00")
    expect(hoursMinutesSeconds(36001), is, "10:00:01")
  },

  "adds decimal places"() {
    expect(hoursMinutesSeconds(0, 0), is, "0:00")
    expect(hoursMinutesSeconds(0, 1), is, "0:00.0")
    expect(hoursMinutesSeconds(0, 2), is, "0:00.00")
  },

  "formats fractional seconds"() {
    expect(hoursMinutesSeconds(1.23, 2), is, "0:01.23")
  },

  "rounds decimals"() {
    // Note: toFixed uses the binary representation, not the decimal
    // representation, for rounding, which can lead to strange-seeming
    // results. For this silly toy app it doesn't matter at all, though.
    expect(hoursMinutesSeconds(2.3456, 2), is, "0:02.35")
  },
})

const identity = (x) => x
const toFixed = (decimals) => (n) => n.toFixed(decimals)
