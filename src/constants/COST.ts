import { type AcquirableElementKey, ElementKey } from "@farcebook/types";

export const COST: Record<AcquirableElementKey, { base: number; multiplier: number }> = {
  [ElementKey.Influencers]: { base: 250, multiplier: 1.5 },
  [ElementKey.Based]: { base: 500, multiplier: 2.25 },
  [ElementKey.Viral]: { base: 1500, multiplier: 2 },
  [ElementKey.Dank]: { base: 2500, multiplier: 2 },
  [ElementKey.Woke]: { base: 3500, multiplier: 3 },
};
