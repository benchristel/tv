import { useState } from "react"
import { useInterval } from "./useInterval"

export function useNow()/* FIXME : number */ {
  const [now, setNow] = useState(+new Date())
  useInterval(() => setNow(+new Date()), 250)
  return now
}
