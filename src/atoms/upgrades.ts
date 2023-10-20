import { atom } from "jotai";

import { show } from "@farcebook/atoms/show";
import { UPGRADE_ORDER } from "@farcebook/constants/UPGRADES";
import { ElementKey } from "@farcebook/types";

const upgradeIndex = atom(0);

export const nextUpgrade = atom(
  (get) => UPGRADE_ORDER[get(upgradeIndex)],
  (_, set) => {
    set(upgradeIndex, (current) => {
      if (current === UPGRADE_ORDER.length - 1) {
        set(show, ElementKey.Dominance);

        return current;
      }

      return current + 1;
    });
  },
);
