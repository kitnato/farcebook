import { useAtomValue } from "jotai";

import { engagementMultiplier } from "@farcebook/atoms/engagement";
import { followersDeltaMultiplier } from "@farcebook/atoms/followers";
import { influencers, influencersRateReduction } from "@farcebook/atoms/influencers";
import { reachMultiplier } from "@farcebook/atoms/reach";
import { COST } from "@farcebook/constants/COST";
import { AcquirableElementKey, ElementKey } from "@farcebook/types";

export default function useAcquireCost(key: AcquirableElementKey) {
  const rankAtom = (() => {
    switch (key) {
      case ElementKey.Based:
        return influencersRateReduction;
      case ElementKey.Dank:
        return followersDeltaMultiplier;
      case ElementKey.Influencers:
        return influencers;
      case ElementKey.Viral:
        return reachMultiplier;
      case ElementKey.Woke:
        return engagementMultiplier;
    }
  })();
  const rank = useAtomValue(rankAtom);
  const { base, multiplier } = COST[key];

  return Math.ceil(base * Math.pow(multiplier, rank));
}
