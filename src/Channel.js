// @flow
import type { Broadcast } from "./Broadcast"

export interface Channel {
  getBroadcast(time: number): Broadcast;
  getName(): string;
  getTotalDuration(): number;
}
