// @flow
import { useEffect, useRef } from "react"

export function useInterval(cb: () => mixed, ms: number): void {
  const intervalRef = useRef()
  const callbackRef = useRef()
  callbackRef.current = cb
  useEffect(() => {
    intervalRef.current = setInterval(() => callbackRef.current?.(), ms)
    return () => clearInterval(intervalRef.current)
  }, [ms])
}
