// @flow
import type { Episode } from "./types";

import { parseEpisodes } from "./ingestion";

export const tastingHistoryEpisodes: Array<Episode> = parseEpisodes([
  `
    R-dPIBUvVC8 0:00-1:48 Byzantine Honey Fritters
    R-dPIBUvVC8 2:53-17:24 Byzantine Honey Fritters
  `
])