import { useSetAtom } from "jotai";
import { useEffect } from "react";

import { nextUpgrade } from "@farcebook/atoms/upgrades";
import { usePreviousValue } from "@farcebook/hooks/usePreviousValue";

export function useNextUpgrade(isActive = false) {
  const setNextUpgrade = useSetAtom(nextUpgrade);

  const wasActive = usePreviousValue<boolean>(isActive);

  useEffect(() => {
    if (wasActive !== null && wasActive !== isActive) {
      setNextUpgrade();
    }
  }, [isActive, setNextUpgrade, wasActive]);
}
