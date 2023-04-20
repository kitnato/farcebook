import { useAtomValue } from "jotai";
import { Fade } from "react-bootstrap";

import { reachMultiplier } from "@farcebook/atoms/reach";
import { showElement } from "@farcebook/atoms/show";
import { UpgradeContents } from "@farcebook/components/Upgrades/UpgradeContents";
import { useNextUpgrade } from "@farcebook/hooks/useNextUpgrade";
import { ElementKey } from "@farcebook/types";

export function Viral() {
  const showElementValue = useAtomValue(showElement);

  const isShowing = showElementValue[ElementKey.Viral];

  useNextUpgrade(isShowing);

  return (
    <Fade in={isShowing} mountOnEnter>
      <div>
        <UpgradeContents atom={reachMultiplier} elementKey={ElementKey.Viral} />
      </div>
    </Fade>
  );
}
