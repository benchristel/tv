// @flow
import { useRef, useState, useEffect } from "react"

let nonce = 0
export function useModel<T>(constructor: (() => mixed) => T): T {
  const modelRef = useRef()
  const [, setNonce] = useState(0)
  if (modelRef.current != null) return modelRef.current
  const instance = constructor(() => setNonce(++nonce))
  modelRef.current = instance
  return instance
}
