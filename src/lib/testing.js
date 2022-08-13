// @flow

export function errorThrownFrom(fn: () => mixed): Error | void {
  try {
    fn()
  } catch (e) {
    return e
  }
}
