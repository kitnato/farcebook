import { useAtomValue, useSetAtom } from "jotai";
import Button from "react-bootstrap/Button";

import { attritionGrace } from "@farcebook/atoms/attrition";
import { engagementDelta, engagementIncrement } from "@farcebook/atoms/engagement";
import { clicksPerSecond } from "@farcebook/atoms/global";
import { likeWeight } from "@farcebook/atoms/likes";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import useMeasure from "@farcebook/hooks/useMeasure";
import { ReactComponent as ThumbsUp } from "@farcebook/thumbs-up.svg";

export default function LikeButton() {
  const engagementDeltaValue = useAtomValue(engagementDelta);
  const engagementWeightValue = useAtomValue(likeWeight);
  const incrementEngagement = useSetAtom(engagementIncrement);
  const setAttritionGrace = useSetAtom(attritionGrace);

  const measureClicks = useMeasure(clicksPerSecond);

  return (
    <Button
      onClick={({ currentTarget }) => {
        incrementEngagement();
        measureClicks(1);
        setAttritionGrace();
        currentTarget.blur();
      }}
      size="lg"
    >
      <ThumbsUp />
      &nbsp;
      <span className="font-monospace">
        +{(engagementDeltaValue * engagementWeightValue).toLocaleString(LOCALE)}
      </span>
    </Button>
  );
}
