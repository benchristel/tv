import { expect, is, test } from "@benchristel/taste"

export const pipe/* FIXME : $ComposeReverse */ = ((...fns) => {
  return fns.reduce(rcompose)
})

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

export function rcompose/* FIXME <T, U, V> */(f/* : (T) => U */, g/* : (U) => V */)/* : (T) => V */ {
  return (...args) => g(f(...args))
}

export function map/* FIXME <T, U> */(f/* : (T) => U*/)/*: (Array<T>) =>  Array<U>*/ {
  return (array) => array.map(f)
}
