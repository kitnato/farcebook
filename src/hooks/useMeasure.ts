import { type PrimitiveAtom, useSetAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";

import {
  MEASUREMENT_RATE,
  MEASUREMENT_TICK,
  MEASUREMENT_WINDOW,
} from "@farcebook/constants/MEASUREMENT";
import { useAnimation } from "@farcebook/hooks/useAnimation";

export function useMeasure(atom: PrimitiveAtom<number>) {
  const setAtom = useSetAtom(atom);

  const [actions, setActions] = useState<[number, number][]>([]);
  const [delta, setDelta] = useState(0);

  const noActions = actions.length === 0;

  useAnimation((deltaTime) => {
    setDelta((current) => current + deltaTime);
  }, noActions);

  useEffect(() => {
    if (noActions) {
      setAtom(0);
    }

    if (delta >= MEASUREMENT_TICK) {
      const now = Date.now();
      const { elapsed, sum } = actions.reduce(
        ({ elapsed, sum }, [timestamp, actions]) => ({
          elapsed: Math.max(elapsed, now - timestamp),
          sum: sum + actions,
        }),
        { elapsed: 0, sum: 0 },
      );

      setAtom((sum / (Math.round(elapsed / 100) * 100)) * MEASUREMENT_RATE);
      setDelta(0);

      setActions((current) =>
        current.filter(([timestamp]) => timestamp >= now - MEASUREMENT_WINDOW),
      );
    }
  }, [actions, delta, noActions, setAtom]);

  return useCallback(
    (change: number) => {
      setActions((current) => [...current, [Date.now(), change]]);
    },
    [setActions],
  );
}
