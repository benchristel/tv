import { binarySearch } from "./lib/binarySearch";

// FIXME
// import type { Channel } from "./Channel";
// import type { Episode, Segment, Video } from "./video/types";
import { SECONDS_BETWEEN_VIDEOS } from "./playback"
import { test, expect, equals } from "@benchristel/taste"
import { entireVideo, range } from "./data/parser";
// FIXME
// import { episode } from "./video/types";
// import type { Broadcast } from "./Broadcast";

export function SegmentBoundaryTestChannel(name/* FIXME : string */, episodes/* FIXME : Array<Episode> */)/* FIXME : Channel */ {
  const schedule/* FIXME : Schedule */ = createSchedule(
    episodes.flatMap((episode) => episode.videos),
  )
  const scheduleDuration = schedule.map((s) => s.duration).reduce(add, 0)
  
  return {
    getName,
    getBroadcast,
    getTotalDuration,
  }

  function getName() {
    return name
  }

  function getBroadcast(time/* FIXME : number */)/* : Broadcast */ {
    const seconds = time / 1000
    const secondOfSchedule = seconds % scheduleDuration
    const segment = binarySearch(schedule, (seg) => seg.startSecondOfSchedule <= secondOfSchedule)
    // TODO: stop using the term "segment" here.
    if (segment?.type === "video") {
      return {
        type: "video",
        videoId: segment.videoId,
        videoTitle: segment.videoTitle,
        currentTime: secondOfSchedule - segment.startSecondOfSchedule + segment.startSecondOfVideo,
      }
    } else {
      return {
        type: "nothing",
        nextVideoId: segment?.nextVideoId ?? "",
        nextVideoStartTimestamp: segment?.nextVideoStartSecondOfVideo ?? 0,
      }
    }
  }

  function getTotalDuration() {
    return 0
  }
}

// FIXME
// type Schedule = Array<
//   | {|
//       type: "video",
//       videoId: string,
//       videoTitle: string,
//       duration: number,
//       startSecondOfVideo: number,
//       startSecondOfSchedule: number,
//     |}
//   | {|
//       type: "nothing",
//       nextVideoId: string,
//       nextVideoStartSecondOfVideo: number,
//       duration: number,
//       startSecondOfSchedule: number,
//     |}
// >

function createSchedule(videos/* FIXME : Array<Video> */)/* FIXME : Schedule */ {
  const SECONDS_TO_PLAY = 7
  let totalDuration = 0
  let schedule/* FIXME : Schedule */ = []
  
  for (const video of videos) {
    if (video.segments.length === 1) {
      continue;
    }

    schedule.push({
      type: "nothing",
      nextVideoId: video.videoId,
      nextVideoStartSecondOfVideo: 3,
      duration: SECONDS_BETWEEN_VIDEOS,
      startSecondOfSchedule: totalDuration,
    })
    totalDuration += SECONDS_BETWEEN_VIDEOS

    schedule.push({
      type: "video",
      videoId: "TxJtoBAa2w0",
      videoTitle: "",
      duration: 3,
      startSecondOfVideo: 3,
      startSecondOfSchedule: totalDuration
    })
    totalDuration += 3

    for (let i = 0; i < video.segments.length; i++) {
      const segment = video.segments[i]
      if (i !== 0) {
        const slice = beginningOf(segment, SECONDS_TO_PLAY)
        schedule.push({
          type: "video",
          videoId: video.videoId,
          videoTitle: video.title,
          duration: slice.duration,
          startSecondOfVideo: slice.start,
          startSecondOfSchedule: totalDuration,
        })
        totalDuration += slice.duration
      }
      if (i !== lastIndexOf(video.segments)) {
        const slice = endOf(segment, SECONDS_TO_PLAY)
        schedule.push({
          type: "video",
          videoId: video.videoId,
          videoTitle: video.title,
          duration: slice.duration,
          startSecondOfVideo: slice.start,
          startSecondOfSchedule: totalDuration,
        })
        totalDuration += slice.duration
      }
    }
  }
  
  return schedule
}

test("createSchedule", {
  "returns empty when each video has only one segment"() {
    const videos = [
      video("", entireVideo(60)),
      video("", entireVideo(60)),
    ]
    expect(createSchedule(videos), equals, [])
  },

  "plays the end of the first segment and the beginning of the second"() {
    const videos = [
      video("id-1", range(0, 60), range(120, 999)),
    ]
    expect(createSchedule(videos), equals, [
      {
        type: "nothing",
        nextVideoId: "id-1",
        nextVideoStartSecondOfVideo: 3,
        duration: 2,
        startSecondOfSchedule: 0,
      },
      {
        type: "video",
        videoId: "TxJtoBAa2w0",
        videoTitle: "",
        duration: 3,
        startSecondOfVideo: 3,
        startSecondOfSchedule: 2
      },
      {
        type: "video",
        videoId: "id-1",
        videoTitle: "",
        duration: 7,
        startSecondOfVideo: 53,
        startSecondOfSchedule: 5,
      },
      {
        type: "video",
        videoId: "id-1",
        videoTitle: "",
        duration: 7,
        startSecondOfVideo: 120,
        startSecondOfSchedule: 12,
      },
    ])
  },
})

function lastIndexOf(a/* FIXME : $ReadOnlyArray<mixed> */)/* FIXME : number */ {
  return a.length - 1
}

// FIXME
// type Slice = {|
//   start: number,
//   duration: number,
// |}

function beginningOf(segment/* FIXME : Segment */, seconds/* FIXME : number */)/* FIXME : Slice */ {
  return {
    start: segment.start,
    duration: seconds,
  }
}

function endOf(segment/* FIXME : Segment */, seconds/* FIXME : number */)/* FIXME : Slice */ {
  return {
    start: segment.end - seconds,
    duration: seconds,
  }
}

const add = (a, b) => a + b

function video(id/* FIXME : string */, ...segments)/* FIXME : Video */ {
  return {
    videoId: id,
    title: "",
    segments,
  }
}