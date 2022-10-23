import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";

import { engagementIncrement } from "@farcebook/atoms/engagement";
import {
  influencers,
  influencersEngagement,
  influencersRate,
  isInfluencersRateAtMaximum,
} from "@farcebook/atoms/influencers";
import { LOCALE, PRECISION } from "@farcebook/constants/GLOBAL";
import useAnimation from "@farcebook/hooks/useAnimation";

export default function InfluencersGeneration() {
  const influencersValue = useAtomValue(influencers);
  const influencersEngagementValue = useAtomValue(influencersEngagement);
  const influencersRateValue = useAtomValue(influencersRate);
  const isInfluencersRateAtMaximumValue = useAtomValue(isInfluencersRateAtMaximum);
  const incrementEngagement = useSetAtom(engagementIncrement);
  const [delta, setDelta] = useState(0);

  const show = influencersValue > 0;

  useAnimation((deltaTime) => {
    setDelta((current) => current + deltaTime);
  }, !show);

  useEffect(() => {
    if (delta >= influencersRateValue) {
      for (let i = 0; i < influencersValue; i++) {
        incrementEngagement();
      }

      setDelta(0);
    }
  }, [delta, incrementEngagement, influencersRateValue, influencersValue]);

  if (!show) {
    return null;
  }

  return (
    <span className="text-center">
      Generating&nbsp;
      <strong className="font-monospace">
        {influencersEngagementValue.toLocaleString(LOCALE)}
      </strong>
      &nbsp;Engagement
      {influencersRateValue === 1000 ? (
        " every second"
      ) : isInfluencersRateAtMaximumValue ? (
        " continuously"
      ) : (
        <>
          &nbsp;every&nbsp;
          <strong className="font-monospace">
            {(influencersRateValue / 1000).toFixed(PRECISION)}
          </strong>
          &nbsp;seconds
        </>
      )}
      .
    </span>
  );
}
