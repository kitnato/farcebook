import { REACH_DELTA, REACH_MAXIMUM } from "@farcebook/constants/REACH";
import { ElementKey } from "@farcebook/types";

export const THRESHOLD_REACH = 30;

export const THRESHOLD: Record<Exclude<ElementKey, ElementKey.Dominance>, number> = {
  [ElementKey.Engagement]: 5,
  [ElementKey.ClicksPerSecond]: 10,
  [ElementKey.EngagementPerSecond]: 20,
  [ElementKey.Reach]: THRESHOLD_REACH,
  [ElementKey.LikesPerSecond]: 80,
  [ElementKey.Attrition]: 150,
  [ElementKey.Influencers]: 200,
  [ElementKey.ReachPerSecond]: 300,
  [ElementKey.Upgrades]: 400,
  [ElementKey.Based]: 800,
  [ElementKey.Viral]: 2000,
  [ElementKey.Dank]: 6000,
  [ElementKey.Woke]: 12000,
  [ElementKey.Followers]: THRESHOLD_REACH + REACH_MAXIMUM / REACH_DELTA,
};
