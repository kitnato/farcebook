import { atom } from "jotai";
import { atomWithReducer } from "jotai/utils";

import { engagementMultiplier } from "@farcebook/atoms/engagement";
import {
  INFLUENCERS,
  INFLUENCERS_DELTA,
  INFLUENCERS_RATE,
  INFLUENCERS_RATE_DELTA,
  INFLUENCERS_RATE_MINIMUM,
  INFLUENCERS_RATE_REDUCTION,
  INFLUENCERS_RATE_REDUCTION_DELTA,
} from "@farcebook/constants/INFLUENCERS";

export const influencers = atomWithReducer(INFLUENCERS, (current) => current + INFLUENCERS_DELTA);

export const influencersEngagement = atom((get) => {
  const influencersCount = get(influencers);

  return influencersCount + influencersCount * get(engagementMultiplier);
});

export const influencersRate = atom((get) => {
  let newRate = INFLUENCERS_RATE - get(influencersRateReduction) * INFLUENCERS_RATE_DELTA;

  if (newRate < INFLUENCERS_RATE_MINIMUM) {
    newRate = INFLUENCERS_RATE_MINIMUM;
  }

  return newRate;
});

// Determines Based rank
export const influencersRateReduction = atomWithReducer(
  INFLUENCERS_RATE_REDUCTION,
  (current) => current + INFLUENCERS_RATE_REDUCTION_DELTA
);

export const isInfluencersRateAtMaximum = atom(
  (get) => get(influencersRate) === INFLUENCERS_RATE_MINIMUM
);
