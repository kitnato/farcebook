import { useAtomValue } from "jotai";
import { Fade } from "react-bootstrap";

import { influencersRateReduction, isInfluencersRateAtMaximum } from "@farcebook/atoms/influencers";
import { showElement } from "@farcebook/atoms/show";
import { UpgradeContents } from "@farcebook/components/Upgrades/UpgradeContents";
import { useNextUpgrade } from "@farcebook/hooks/useNextUpgrade";
import { ElementKey } from "@farcebook/types";

export function Based() {
  const isInfluencersRateAtMaximumValue = useAtomValue(isInfluencersRateAtMaximum);
  const showElementValue = useAtomValue(showElement);

  const isShowing = showElementValue[ElementKey.Based];

  useNextUpgrade(isShowing);

  return (
    <Fade in={isShowing} mountOnEnter>
      <div>
        <UpgradeContents
          atom={influencersRateReduction}
          elementKey={ElementKey.Based}
          isAtMaximum={isInfluencersRateAtMaximumValue}
        />
      </div>
    </Fade>
  );
}
