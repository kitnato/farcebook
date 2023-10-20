import { useCallback, useEffect, useRef } from "react";

export function useAnimation(callback: (time: number) => void, stop?: boolean) {
  const frameRef = useRef(-1);
  const previousTimeRef = useRef(0);

  const animate = useCallback(
    (time: number) => {
      callback(time - (previousTimeRef.current || time));
      previousTimeRef.current = time;
      frameRef.current = requestAnimationFrame(animate);
    },
    [callback],
  );

  useEffect(() => {
    if (stop) {
      cancelAnimationFrame(frameRef.current);
      previousTimeRef.current = 0;
    } else {
      frameRef.current = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(frameRef.current);
  }, [animate, stop]);
}
