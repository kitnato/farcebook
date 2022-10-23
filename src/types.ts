export type AcquirableElementKey = Extract<
  ElementKey,
  ElementKey.Based | ElementKey.Dank | ElementKey.Influencers | ElementKey.Viral | ElementKey.Woke
>;

export enum AttritionDirection {
  Dampen,
  Intensify,
}

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

export enum UIVariant {
  Outline = "outline-primary",
  Primary = "primary",
  Red = "danger",
}

export type UpgradableElementKey = Exclude<AcquirableElementKey, ElementKey.Influencers>;
