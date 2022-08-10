// @flow

export type Video = {|
    videoId: string,
    durationSeconds: number,
    title: string,
|}

export type Episode = {|
    videos: Array<Video>,    
|}

export type Show = {|
    weight: number,
    timeslot: Range<number>, // seconds after midnight    
    episodes: Array<Episode>,
|}

export type Range = {|
    start: number,
    end: number,
|}

export function isIn(range: Range, value: number): boolean {
    return value >= range.start && value < range.end
}
