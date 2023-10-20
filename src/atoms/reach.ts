import { atom } from "jotai";

import { attrition } from "@farcebook/atoms/attrition";
import { followersCurrent } from "@farcebook/atoms/followers";
import { ATTRITION_TICK } from "@farcebook/constants/ATTRITION";
import {
  REACH_DELTA,
  REACH_MAXIMUM,
  REACH_MAXIMUM_DELTA,
  REACH_MULTIPLIER,
  REACH_MULTIPLIER_DELTA,
} from "@farcebook/constants/REACH";
import { ReachDeltaDirection } from "@farcebook/types";

export const reach = atom({
  current: 0,
  maximum: REACH_MAXIMUM,
  multiplier: REACH_MULTIPLIER,
});

export const reachCurrent = atom(
  (get) => get(reach).current,
  (get, set, type: ReachDeltaDirection) => {
    const attritionValue = get(attrition);
    const currentReach = get(reach);
    const newReach = { ...currentReach };
    const { current, maximum } = currentReach;

    const delta =
      type === ReachDeltaDirection.Decay
        ? -Math.ceil(maximum * (attritionValue / (1000 / ATTRITION_TICK)))
        : get(reachDelta);
    const newCurrent = current + delta;

    if (type === ReachDeltaDirection.Decay && newCurrent <= 0) {
      const previousMaximumReach = maximum - REACH_MAXIMUM_DELTA;

      if (previousMaximumReach >= REACH_MAXIMUM) {
        newReach.current = previousMaximumReach;
        newReach.maximum = previousMaximumReach;
      } else {
        newReach.current = newCurrent < 0 ? 0 : newCurrent;
      }

      set(followersCurrent, -1);
    } else {
      const isFull = newCurrent >= maximum;

      if (isFull) {
        newReach.current = newCurrent - maximum;
        newReach.maximum = maximum + REACH_MAXIMUM_DELTA;

        set(followersCurrent, 1);
      } else {
        newReach.current = newCurrent < 0 ? 0 : newCurrent;
      }
    }

    set(reach, newReach);
    set(reachTotal, (current) => current + delta);
  },
);

export const reachDelta = atom((get) => REACH_DELTA + REACH_DELTA * get(reachMultiplier));

// Determines Viral rank
export const reachMultiplier = atom(
  (get) => get(reach).multiplier,
  (_, set) => {
    set(reach, ({ multiplier, ...reachContents }) => ({
      multiplier: multiplier + REACH_MULTIPLIER_DELTA,
      ...reachContents,
    }));
  },
);

export const reachMaximum = atom(
  (get) => get(reach).maximum,
  (_, set) => {
    set(reach, ({ maximum, ...reachContents }) => ({
      maximum: maximum + REACH_MAXIMUM_DELTA,
      ...reachContents,
    }));
  },
);

export const reachPerSecond = atom(0);

export const reachTotal = atom(0);
