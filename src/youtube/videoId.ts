export function videoIdFromUrl(url: string): string | undefined {
  return /v=(.{11})/.exec(url)?.[1]
}
