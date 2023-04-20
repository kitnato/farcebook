import { useAtomValue } from "jotai";
import { Fade } from "react-bootstrap";

import { followersDeltaMultiplier } from "@farcebook/atoms/followers";
import { showElement } from "@farcebook/atoms/show";
import { UpgradeContents } from "@farcebook/components/Upgrades/UpgradeContents";
import { useNextUpgrade } from "@farcebook/hooks/useNextUpgrade";
import { ElementKey } from "@farcebook/types";

export function Dank() {
  const showElementValue = useAtomValue(showElement);

  const isShowing = showElementValue[ElementKey.Dank];

  useNextUpgrade(isShowing);

  return (
    <Fade in={isShowing} mountOnEnter>
      <div>
        <UpgradeContents atom={followersDeltaMultiplier} elementKey={ElementKey.Dank} />
      </div>
    </Fade>
  );
}
