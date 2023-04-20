import { useAtomValue } from "jotai";
import { Fragment } from "react";
import Fade from "react-bootstrap/Fade";
import Stack from "react-bootstrap/Stack";

import { showElement } from "@farcebook/atoms/show";
import { Based } from "@farcebook/components/Upgrades/Based";
import { Dank } from "@farcebook/components/Upgrades/Dank";
import { UpgradesProgress } from "@farcebook/components/Upgrades/UpgradesProgress";
import { Viral } from "@farcebook/components/Upgrades/Viral";
import { Woke } from "@farcebook/components/Upgrades/Woke";
import { UPGRADE_ORDER } from "@farcebook/constants/UPGRADES";
import { ElementKey } from "@farcebook/types";

export function Upgrades() {
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.Upgrades]} mountOnEnter>
      <Stack gap={4}>
        <Stack gap={3}>
          {UPGRADE_ORDER.map((key) => (
            <Fragment key={key}>
              {(() => {
                switch (key) {
                  case ElementKey.Based: {
                    return <Based />;
                  }
                  case ElementKey.Dank: {
                    return <Dank />;
                  }
                  case ElementKey.Viral: {
                    return <Viral />;
                  }
                  case ElementKey.Woke: {
                    return <Woke />;
                  }
                }
              })()}
            </Fragment>
          ))}
        </Stack>

        <UpgradesProgress />
      </Stack>
    </Fade>
  );
}
