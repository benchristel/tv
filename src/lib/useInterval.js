import { useEffect, useRef } from "react"

export function useInterval(cb/* FIXME : () => mixed*/, ms/*: number */) {
  const intervalRef = useRef()
  const callbackRef = useRef()
  callbackRef.current = cb
  useEffect(() => {
    intervalRef.current = setInterval(() => callbackRef.current?.(), ms)
    return () => clearInterval(intervalRef.current)
  }, [ms])
}
