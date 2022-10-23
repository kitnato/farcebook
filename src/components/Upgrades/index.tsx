import { useAtomValue } from "jotai";
import Fade from "react-bootstrap/Fade";
import Stack from "react-bootstrap/Stack";

import { showElement } from "@farcebook/atoms/show";
import UpgradesProgress from "@farcebook/components//Upgrades/UpgradesProgress";
import { UPGRADE_ORDER } from "@farcebook/constants/UPGRADES";
import { ElementKey } from "@farcebook/types";

export default function Upgrades() {
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.Upgrades]} mountOnEnter>
      <Stack gap={4}>
        <Stack gap={3}>
          {UPGRADE_ORDER.map(({ Component, key }) => (
            <Component key={key} />
          ))}
        </Stack>

        <UpgradesProgress />
      </Stack>
    </Fade>
  );
}
