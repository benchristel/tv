export function videoIdFromUrl(url/* FIXME : string */)/* FIXME : ?string */ {
  return /v=(.{11})/.exec(url)?.[1]
}
