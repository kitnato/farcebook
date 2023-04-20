import { atom } from "jotai";

import {
  FOLLOWERS_DELTA,
  FOLLOWERS_DELTA_MULTIPLIER,
  FOLLOWERS_DELTA_MULTIPLIER_DELTA,
} from "@farcebook/constants/FOLLOWERS";
import type { DeltaDirection } from "@farcebook/types";

export const followers = atom({
  current: 0,
  deltaMultiplier: FOLLOWERS_DELTA_MULTIPLIER,
});

export const followersCurrent = atom(
  (get) => get(followers).current,
  (get, set, direction: DeltaDirection) => {
    set(followers, ({ current, ...followersContents }) => {
      const newFollowers = current + get(followersDelta) * direction;

      return {
        ...followersContents,
        current: newFollowers < 0 ? 0 : newFollowers,
      };
    });
  }
);

export const followersDelta = atom(
  (get) => FOLLOWERS_DELTA + FOLLOWERS_DELTA * get(followersDeltaMultiplier)
);

// Determines Dank rank
export const followersDeltaMultiplier = atom(
  (get) => get(followers).deltaMultiplier,
  (_, set) => {
    set(followers, ({ deltaMultiplier, ...followersContents }) => ({
      deltaMultiplier: deltaMultiplier + FOLLOWERS_DELTA_MULTIPLIER_DELTA,
      ...followersContents,
    }));
  }
);
