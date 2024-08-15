import { useState } from "react"

export function useLatch()/* FIXME : [boolean, () => void] */ {
  const [v, set] = useState(false)
  return [v, () => set(true)]
}
