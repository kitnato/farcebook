import { ElementKey, type UpgradableElementKey } from "@farcebook/types";

export const UPGRADE_ORDER: UpgradableElementKey[] = [
  ElementKey.Based,
  ElementKey.Viral,
  ElementKey.Dank,
  ElementKey.Woke,
];

export const UPGRADE_LABELS: Record<UpgradableElementKey, { description: string; name: string }> = {
  [ElementKey.Based]: {
    description: "Increases the Engagement generation rate from Influencers.",
    name: "Based",
  },
  [ElementKey.Dank]: {
    description: "Increases the amount of Followers gained at maximum Reach.",
    name: "Dank",
  },
  [ElementKey.Viral]: {
    description: "Increases the Reach generated for each Engagement.",
    name: "Viral",
  },
  [ElementKey.Woke]: {
    description: "Increases the number of Engagement generated per click and per Influencer.",
    name: "Woke",
  },
};
