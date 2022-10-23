import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import Fade from "react-bootstrap/Fade";

import { attrition, attritionGrace } from "@farcebook/atoms/attrition";
import { showElement } from "@farcebook/atoms/show";
import Statistic from "@farcebook/components//Statistic";
import { ATTRITION_MAXIMUM, ATTRITION_RATE } from "@farcebook/constants/ATTRITION";
import { PRECISION } from "@farcebook/constants/GLOBAL";
import useAnimation from "@farcebook/hooks/useAnimation";
import { ElementKey, UIStatisticVariant } from "@farcebook/types";

export default function Attrition() {
  const [attritionValue, setAttrition] = useAtom(attrition);
  const [attritionGraceValue, changeAttritionGrace] = useAtom(attritionGrace);
  const showElementValue = useAtomValue(showElement);

  const [delta, setDelta] = useState(0);
  const isShowing = showElementValue[ElementKey.Attrition];

  useAnimation((deltaTime) => {
    changeAttritionGrace(deltaTime);
    setDelta((current) => current + deltaTime);
  }, !isShowing);

  useEffect(() => {
    if (
      attritionGraceValue === 0 &&
      delta >= ATTRITION_RATE &&
      attritionValue < ATTRITION_MAXIMUM
    ) {
      setAttrition(1);
      setDelta(0);
    }
  }, [attritionGraceValue, attritionValue, delta, setAttrition]);

  return (
    <Fade in={isShowing} mountOnEnter>
      <div>
        <Statistic
          headerText={`${(attritionValue * 100).toFixed(PRECISION)}%`}
          labelText="Attrition"
          variant={UIStatisticVariant.Small}
        />
      </div>
    </Fade>
  );
}
