// @flow
import type { Player } from "./youtube/player.jsx"
import * as React from "react"

type Props = {|
  player: Player,
  commands: Array<Command>,
  volume: number,
|}

export type Command =
  | {| type: "play" |}
  | {| type: "cue", videoId: string, timestamp: number |}
  | {| type: "seek", timestamp: number |}

export class PlayerCommander extends React.Component<Props> {
  componentDidUpdate() {
    const { player, volume, commands } = this.props

    player.setVolume(volume)

    commands.forEach((cmd) => {
      switch (cmd.type) {
        case "play":
          player.playVideo()
          break
        case "cue":
          player.cueVideoById(cmd.videoId, cmd.timestamp)
          break
        case "seek":
          player.seekTo(cmd.timestamp)
          break
        default:
          console.error("unexpected video command type", (cmd.type: empty), cmd)
      }
    })
  }

  render(): React.Node {
    return null
  }
}
