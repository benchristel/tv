// @flow
import * as React from "react";

type Props = {|
  volume: number, // 0-100
  onChange: (number) => mixed,  
|}

export function VolumeControl(props: Props): React.Node {
  return <div className="volume">
    <input type="range" min="0" max="100" onChange={props.onChange}></input>
  </div>;
}