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

function formatPositiveHoursMinutesSeconds(seconds: number, decimals: number) {
  function pad(n: number, format: (n: number) => string = toString) {
    const formatted = format(n)
    const isSingleDigit = formatted.split(/[^\d]/)[0].length === 1
    return (isSingleDigit ? "0" : "") + formatted
  }

  const quantaPerSecond = Math.pow(10, decimals)
  const quantaPerMinute = quantaPerSecond * 60
  const quantaPerHour = quantaPerMinute * 60

  const quanta = Math.round(seconds * quantaPerSecond)
  const h = Math.floor(quanta / quantaPerHour)
  const m = Math.floor((quanta % quantaPerHour) / quantaPerMinute)
  const s = (quanta % quantaPerMinute) / quantaPerSecond

  return h > 0
    ? `${h}:${pad(m)}:${pad(s, toFixed(decimals))}`
    : `${m}:${pad(s, toFixed(decimals))}`
}

export function durationAsWords(seconds: number): string {
  const [unit, magnitude] = (() => {
    switch (true) {
      case seconds > 86400: return ["days", seconds / 86400]
      case seconds > 3600: return ["hours", seconds / 3600]
      case seconds > 60: return ["minutes", seconds / 60]
      default: return ["seconds", seconds]
    }
  })()
  return `${magnitude.toFixed(1)} ${unit}`
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

  "pads fractional seconds correctly"() {
    expect(hoursMinutesSeconds(9.9, 0), is, "0:10")
  },

  "rounds up to 1:00 and not 0:60"() {
    expect(hoursMinutesSeconds(59.9, 0), is, "1:00")
  },

  "rounds down to 0:59"() {
    expect(hoursMinutesSeconds(59.4, 0), is, "0:59")
  },

  "rounds up to 1:00 and not 0:60 when there are decimals"() {
    expect(hoursMinutesSeconds(59.99, 1), is, "1:00.0")
  },

  "rounds to 59.5"() {
    expect(hoursMinutesSeconds(59.45, 1), is, "0:59.5")
  },

  "rounds up to 1:00:00 and not 0:60:00"() {
    expect(hoursMinutesSeconds(3599.9, 0), is, "1:00:00")
  },
})

test("durationAsWords", {
  "zero"() {
    expect(durationAsWords(0), is, "0.0 seconds")
  },

  "two seconds"() {
    expect(durationAsWords(2), is, "2.0 seconds")
  },

  "two minutes"() {
    expect(durationAsWords(120), is, "2.0 minutes")
  },

  "two and a half minutes"() {
    expect(durationAsWords(150), is, "2.5 minutes")
  },

  "two and a third minutes"() {
    expect(durationAsWords(140), is, "2.3 minutes")
  },

  "two hours"() {
    expect(durationAsWords(7200), is, "2.0 hours")
  },

  "two days"() {
    expect(durationAsWords(48 * 3600), is, "2.0 days")
  },
})

const toString = (x: unknown) => String(x)
const toFixed = (decimals: number) => (n: number) => n.toFixed(decimals)
