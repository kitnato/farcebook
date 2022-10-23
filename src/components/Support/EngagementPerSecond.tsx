import { useAtomValue } from "jotai";
import Fade from "react-bootstrap/Fade";

import { engagementPerSecond } from "@farcebook/atoms/engagement";
import { showElement } from "@farcebook/atoms/show";
import SupportElement from "@farcebook/components//Support/SupportElement";
import { ElementKey } from "@farcebook/types";

export default function EngagementPerSecond() {
  const engagementPerSecondValue = useAtomValue(engagementPerSecond);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.EngagementPerSecond]}>
      <div>
        <SupportElement label="Engagement per second" value={engagementPerSecondValue} />
      </div>
    </Fade>
  );
}
