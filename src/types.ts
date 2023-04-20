export type AcquirableElementKey = Extract<
  ElementKey,
  ElementKey.Based | ElementKey.Dank | ElementKey.Influencers | ElementKey.Viral | ElementKey.Woke
>;

export enum AttritionDirection {
  Dampen,
  Intensify,
}

export type BootstrapColor = "danger" | "outline-primary" | "primary";

export enum ElementKey {
  Attrition,
  Based,
  ClicksPerSecond,
  Dank,
  Dominance,
  Followers,
  Engagement,
  EngagementPerSecond,
  Influencers,
  LikesPerSecond,
  Reach,
  ReachPerSecond,
  Upgrades,
  Viral,
  Woke,
}

export type DeltaDirection = -1 | 1;

export enum ReachDeltaDirection {
  Decay,
  Grow,
}

export enum UIStatisticVariant {
  Large,
  Normal,
  Small,
}

export type UpgradableElementKey = Exclude<AcquirableElementKey, ElementKey.Influencers>;
