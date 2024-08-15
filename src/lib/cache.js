import { expect, is, test } from "@benchristel/taste"

export function cache/* FIXME <T> */(
  maxSize/* FIXME : number */,
  expensiveFallback/* FIXME : (string) => T */
)/* FIXME : (string) => T */ {
  let values = {}
  return (key) => {
    if (!(key in values)) {
      if (Object.keys(values).length === maxSize) {
        values = {}
      }
      values[key] = expensiveFallback(key)
    }
    return values[key]
  }
}

test("cache", {
  "caches a value"() {
    let calls = 0
    const cached = cache(1, () => {
      calls++
      return 123
    })
    cached("foo")
    cached("foo")
    expect(calls, is, 1)
  },

  "computes and caches values by key"() {
    const cached = cache(2, (key) => {
      return key + "x"
    })
    expect(cached("foo"), is, "foox")
    expect(cached("bar"), is, "barx")
  },

  "caches multiple values"() {
    let calls = 0
    const cached = cache(2, (key) => {
      calls++
      return key + "x"
    })
    cached("foo")
    cached("foo")
    cached("bar")
    cached("bar")
    expect(calls, is, 2)
    expect(cached("foo"), is, "foox")
    expect(cached("bar"), is, "barx")
  },

  "a max size of 0 means no limit"() {
    let calls = 0
    const cached = cache(0, () => (calls++, 123))
    cached("a")
    cached("b")
    cached("c")
    expect(calls, is, 3)
  },
})
