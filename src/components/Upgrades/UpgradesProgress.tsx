import { useAtomValue } from "jotai";
import { Fade, Stack } from "react-bootstrap";

import { likes } from "@farcebook/atoms/likes";
import { showElement } from "@farcebook/atoms/show";
import { nextUpgrade } from "@farcebook/atoms/upgrades";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import { THRESHOLD } from "@farcebook/constants/THRESHOLD";
import { ElementKey } from "@farcebook/types";

export function UpgradesProgress() {
  const likesValue = useAtomValue(likes);
  const nextUpgradeValue = useAtomValue(nextUpgrade);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade
      in={showElementValue[ElementKey.Upgrades] && !showElementValue[ElementKey.Dominance]}
      mountOnEnter
      unmountOnExit
    >
      <Stack direction="horizontal" gap={3}>
        <span>Likes required for next Upgrade:</span>

        <span className="font-monospace">
          {`${likesValue.toLocaleString(LOCALE)} / ${THRESHOLD[nextUpgradeValue].toLocaleString(
            LOCALE,
          )}`}
        </span>
      </Stack>
    </Fade>
  );
}
