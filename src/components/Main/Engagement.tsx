import { useAtomValue } from "jotai";
import { Fade } from "react-bootstrap";

import { engagement, engagementPerSecond } from "@farcebook/atoms/engagement";
import { showElement } from "@farcebook/atoms/show";
import { Statistic } from "@farcebook/components/Statistic";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import { useMeasureDifference } from "@farcebook/hooks/useMeasureDifference";
import { ElementKey } from "@farcebook/types";

export function Engagement() {
  const engagementValue = useAtomValue(engagement);
  const showElementValue = useAtomValue(showElement);

  useMeasureDifference(engagementPerSecond, engagementValue);

  return (
    <Fade in={showElementValue[ElementKey.Engagement]} mountOnEnter>
      <div>
        <Statistic headerText={engagementValue.toLocaleString(LOCALE)} labelText="Engagement" />
      </div>
    </Fade>
  );
}
