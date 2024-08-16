import { useEffect, useRef } from "react"

export function useInterval(cb: () => unknown, ms: number) {
  const intervalRef = useRef<number>()
  const callbackRef = useRef<() => unknown>()
  callbackRef.current = cb
  useEffect(() => {
    intervalRef.current = setInterval(() => callbackRef.current?.(), ms)
    return () => clearInterval(intervalRef.current)
  }, [ms])
}
