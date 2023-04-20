import type { PrimitiveAtom } from "jotai";
import { useEffect } from "react";

import { useMeasure } from "@farcebook/hooks/useMeasure";
import { usePreviousValue } from "@farcebook/hooks/usePreviousValue";

export function useMeasureDifference(atom: PrimitiveAtom<number>, value: number) {
  const measure = useMeasure(atom);
  const previousValue = usePreviousValue<number>(value);

  useEffect(() => {
    if (previousValue !== null) {
      measure(value - previousValue);
    }
  }, [measure, previousValue, value]);
}
