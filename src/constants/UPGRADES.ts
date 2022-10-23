import Based from "@farcebook/components//Upgrades/Based";
import Dank from "@farcebook/components//Upgrades/Dank";
import Viral from "@farcebook/components//Upgrades/Viral";
import Woke from "@farcebook/components//Upgrades/Woke";
import { ElementKey, UpgradableElementKey } from "@farcebook/types";

export const UPGRADE_ORDER: { Component: React.FC; key: UpgradableElementKey }[] = [
  { Component: Based, key: ElementKey.Based },
  { Component: Viral, key: ElementKey.Viral },
  { Component: Dank, key: ElementKey.Dank },
  { Component: Woke, key: ElementKey.Woke },
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
