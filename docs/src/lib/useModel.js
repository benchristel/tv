import { useRef, useState, useEffect } from "../../_snowpack/pkg/react.js";
let nonce = 0;
export function useModel(constructor) {
  const modelRef = useRef();
  const [, setNonce] = useState(0);
  if (modelRef.current)
    return modelRef.current.instance;
  const instance = constructor(() => setNonce(++nonce));
  modelRef.current = { instance };
  return instance;
}
