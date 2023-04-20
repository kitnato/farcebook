import { useAtomValue } from "jotai";
import { Fade } from "react-bootstrap";

import { reachPerSecond } from "@farcebook/atoms/reach";
import { showElement } from "@farcebook/atoms/show";
import { SupportElement } from "@farcebook/components/Support/SupportElement";
import { ElementKey } from "@farcebook/types";

export function ReachPerSecond() {
  const reachPerSecondValue = useAtomValue(reachPerSecond);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.ReachPerSecond]}>
      <div>
        <SupportElement label="Reach per second" value={reachPerSecondValue} />
      </div>
    </Fade>
  );
}
