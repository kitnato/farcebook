import { useEffect, useRef } from "react";

export default function usePreviousValue<T>(value: T): T | null {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
