import * as React from "react";

/* type Props = {|
  volume: number, // 0-100
  onChange: (number) => mixed,  
|}
FIXME
 */
export function VolumeControl(props/* : Props FIXME */) {
  return <div className="volume">
    <div className="volume-icon" />
    <input
      aria-label="volume"
      type="range"
      min="0"
      max="100"
      onChange={(e) => props.onChange(e.target.value)}
      value={props.volume}
    />
  </div>;
}