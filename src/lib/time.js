// @flow
export function debugTimestamp(): string {
  return ((+new Date() % 1000000) / 1000).toFixed(3)
}
