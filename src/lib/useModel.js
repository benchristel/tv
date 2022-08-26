// @flow
import { useRef, useState, useEffect } from "react"

let nonce = 0
export function useModel<T>(constructor: (() => mixed) => T): T {
  const modelRef = useRef()
  const [, setNonce] = useState(0)
  if (modelRef.current) return modelRef.current.instance
  const instance = constructor(() => setNonce(++nonce))
  modelRef.current = { instance }
  return instance
}
