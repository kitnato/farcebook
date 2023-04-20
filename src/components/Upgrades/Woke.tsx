import { useAtomValue } from "jotai";
import { Fade } from "react-bootstrap";

import { engagementMultiplier } from "@farcebook/atoms/engagement";
import { showElement } from "@farcebook/atoms/show";
import { UpgradeContents } from "@farcebook/components/Upgrades/UpgradeContents";
import { useNextUpgrade } from "@farcebook/hooks/useNextUpgrade";
import { ElementKey } from "@farcebook/types";

export function Woke() {
  const showElementValue = useAtomValue(showElement);

  const isShowing = showElementValue[ElementKey.Woke];

  useNextUpgrade(isShowing);

  return (
    <Fade in={isShowing} mountOnEnter>
      <div>
        <UpgradeContents atom={engagementMultiplier} elementKey={ElementKey.Woke} />
      </div>
    </Fade>
  );
}
