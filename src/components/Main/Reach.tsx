import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { Fade, Stack } from "react-bootstrap";

import { followersDelta } from "@farcebook/atoms/followers";
import {
  reachCurrent,
  reachDelta,
  reachMaximum,
  reachPerSecond,
  reachTotal,
} from "@farcebook/atoms/reach";
import { showElement } from "@farcebook/atoms/show";
import { LabelledProgressBar } from "@farcebook/components/LabelledProgressBar";
import { ATTRITION_TICK } from "@farcebook/constants/ATTRITION";
import { REACH_PER_SECOND_CONTINUOUS } from "@farcebook/constants/REACH";
import { useAnimation } from "@farcebook/hooks/useAnimation";
import { useMeasureDifference } from "@farcebook/hooks/useMeasureDifference";
import { ElementKey, ReachDeltaDirection } from "@farcebook/types";

export function Reach() {
  const [reachCurrentValue, setReachCurrent] = useAtom(reachCurrent);
  const followersDeltaValue = useAtomValue(followersDelta);
  const reachDeltaValue = useAtomValue(reachDelta);
  const reachMaximumValue = useAtomValue(reachMaximum);
  const reachPerSecondValue = useAtomValue(reachPerSecond);
  const reachTotalValue = useAtomValue(reachTotal);
  const showElementValue = useAtomValue(showElement);
  const [delta, setDelta] = useState(0);

  const isContinuous = reachPerSecondValue > REACH_PER_SECOND_CONTINUOUS;

  useAnimation((deltaTime) => {
    setDelta((current) => current + deltaTime);
  }, !showElementValue[ElementKey.Attrition]);

  useEffect(() => {
    if (delta >= ATTRITION_TICK) {
      setReachCurrent(ReachDeltaDirection.Decay);
      setDelta(0);
    }
  }, [delta, setReachCurrent]);

  useMeasureDifference(reachPerSecond, reachTotalValue);

  return (
    <Fade in={showElementValue[ElementKey.Reach]} mountOnEnter>
      <Stack className="text-center" gap={2}>
        <LabelledProgressBar
          isContinuous={isContinuous}
          label={
            isContinuous ? `${reachMaximumValue}` : `${reachCurrentValue} / ${reachMaximumValue}`
          }
          value={(reachCurrentValue / reachMaximumValue) * 100}
        />

        <span className="text-uppercase">Reach</span>

        <Stack>
          <span>
            <strong className="font-monospace">{reachDeltaValue}</strong> Reach per Engagement
          </span>

          <span>
            <strong className="font-monospace">{followersDeltaValue}</strong>
            {followersDeltaValue === 1 ? " Follower" : " Followers"} per{" "}
            <strong className="font-monospace">{reachMaximumValue}</strong> Reach
          </span>
        </Stack>
      </Stack>
    </Fade>
  );
}
