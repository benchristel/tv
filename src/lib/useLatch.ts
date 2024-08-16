import { useState } from "react"

export function useLatch(): [boolean, () => void] {
  const [v, set] = useState(false)
  return [v, () => set(true)]
}
