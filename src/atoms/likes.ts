import { atom } from "jotai";

import { followersCurrent } from "@farcebook/atoms/followers";
import { reachCurrent } from "@farcebook/atoms/reach";
import { show, showGameOver } from "@farcebook/atoms/show";
import { LIKES_MAXIMUM, LIKE_WEIGHT } from "@farcebook/constants/LIKES";
import { THRESHOLD, THRESHOLD_REACH } from "@farcebook/constants/THRESHOLD";
import { ReachDeltaDirection } from "@farcebook/types";

export const likes = atom(0);

export const likesIncrement = atom(null, (get, set) => {
  const newLikes = get(likes) + get(likeWeight);

  set(likes, newLikes);

  Object.entries(THRESHOLD).forEach(([key, value]) => {
    if (newLikes >= value) {
      set(show, parseInt(key));
    }
  });

  if (newLikes >= THRESHOLD_REACH) {
    set(reachCurrent, ReachDeltaDirection.Grow);
  }

  if (newLikes > LIKES_MAXIMUM) {
    set(showGameOver, true);
  }
});

export const likesPerSecond = atom(0);

export const likeWeight = atom((get) => LIKE_WEIGHT + get(followersCurrent));
