// @flow
export function videoIdFromUrl(url: string): ?string {
  return /v=(.{11})/.exec(url)?.[1]
}
