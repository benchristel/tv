export function errorThrownFrom(fn: () => unknown): Error | undefined {
  try {
    fn()
  } catch (e: any) {
    return e
  }
}
