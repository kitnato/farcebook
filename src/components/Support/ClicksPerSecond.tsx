import { useAtomValue } from "jotai";
import { Fade } from "react-bootstrap";

import { clicksPerSecond } from "@farcebook/atoms/global";
import { showElement } from "@farcebook/atoms/show";
import { SupportElement } from "@farcebook/components/Support/SupportElement";
import { ElementKey } from "@farcebook/types";

export function ClicksPerSecond() {
  const clicksPerSecondValue = useAtomValue(clicksPerSecond);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.ClicksPerSecond]}>
      <div>
        <SupportElement label="Clicks per second" value={clicksPerSecondValue} />
      </div>
    </Fade>
  );
}
