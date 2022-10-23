import { atom } from "jotai";
import { atomWithReducer } from "jotai/utils";

import { attrition } from "@farcebook/atoms/attrition";
import { likesIncrement } from "@farcebook/atoms/likes";
import {
  ENGAGEMENT_DELTA,
  ENGAGEMENT_MULTIPLIER,
  ENGAGEMENT_MULTIPLIER_DELTA,
} from "@farcebook/constants/ENGAGEMENT";
import { AttritionDirection } from "@farcebook/types";

// TODO - refactor to have similar composite structure akin to followers and reach.

export const engagement = atom(0);

export const engagementDelta = atom(
  (get) => ENGAGEMENT_DELTA + ENGAGEMENT_DELTA * get(engagementMultiplier)
);

export const engagementIncrement = atom(null, (get, set) => {
  const engagementDeltaValue = get(engagementDelta);

  set(engagement, (current) => current + engagementDeltaValue);
  set(attrition, AttritionDirection.Dampen);

  for (let i = 0; i < engagementDeltaValue; i++) {
    set(likesIncrement);
  }
});

// Determines Woke
export const engagementMultiplier = atomWithReducer(
  ENGAGEMENT_MULTIPLIER,
  (current) => current + ENGAGEMENT_MULTIPLIER_DELTA
);

export const engagementPerSecond = atom(0);
