import * as React from "react";

type Props = {
  volume: number, // 0-100
  onChange: (value: number) => unknown,
}

export function VolumeControl(props: Props) {
  return <div className="volume">
    <div className="volume-icon" />
    <input
      aria-label="volume"
      type="range"
      min="0"
      max="100"
      onChange={(e) => props.onChange(+e.target.value)}
      value={props.volume}
    />
  </div>;
}