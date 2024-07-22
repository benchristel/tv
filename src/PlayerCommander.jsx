// @flow
import type { Player } from "./youtube/player.jsx"
import * as React from "react"
import {test, expect, is} from "@benchristel/taste"
import {SECONDS_BETWEEN_VIDEOS} from "./playback"

type Props = {|
  player: Player,
  commands: Array<Command>,
  volume: number,
  now: number,
|}

export type Command =
  | {| type: "play" |}
  | {| type: "cue", videoId: string, timestamp: number |}
  | {| type: "seek", timestamp: number |}

export class PlayerCommander extends React.Component<Props> {
  lastSeek: number = -Infinity;
  lastVideoId: string = "";

  componentDidUpdate() {
    const { player, volume, commands, now } = this.props

    player.setVolume(fromPerceivedVolume(volume))

    commands.forEach((cmd) => {
      switch (cmd.type) {
        case "play":
          player.playVideo()
          break
        case "cue":
          if (this.lastVideoId !== cmd.videoId) {
            this.clearSeekCooldown();
          }
          if (this.seekCooldownElapsed(now)) {
            this.lastSeek = now;
            player.cueVideoById(cmd.videoId, cmd.timestamp)
          }
          break
        case "seek": {
          if (this.seekCooldownElapsed(now)) {
            this.lastSeek = now;
            player.seekTo(cmd.timestamp);
          }
          break
        }
        default:
          console.error("unexpected video command type", (cmd.type: empty), cmd)
      }
    })
  }

  render(): React.Node {
    return null
  }

  clearSeekCooldown() {
    this.lastSeek = -Infinity
  }

  seekCooldownElapsed(nowMillis: number): boolean {
    const millisSinceLastSeek = nowMillis - this.lastSeek;
    return millisSinceLastSeek > SECONDS_BETWEEN_VIDEOS * 1000
  }
}

function fromPerceivedVolume(perceivedVolume) {
  return square(perceivedVolume / 100) * 100
}

test("fromPerceivedVolume", {
  "returns 0 given 0"() {
    expect(fromPerceivedVolume(0), is, 0)
  },

  "returns 100 given 100"() {
    expect(fromPerceivedVolume(100), is, 100)
  },

  "returns 25 given 50"() {
    expect(fromPerceivedVolume(50), is, 25)
  },
})

function square(x) {
  return x * x
}
