import { atomWithReducer } from "jotai/utils";

import {
  ATTRITION_DELTA_DAMPENING,
  ATTRITION_DELTA_INTENSIFIER,
  ATTRITION_GRACE,
  ATTRITION_MAXIMUM,
  ATTRITION_MINIMUM,
} from "@farcebook/constants/ATTRITION";
import { AttritionDirection } from "@farcebook/types";

export const attrition = atomWithReducer(
  ATTRITION_MINIMUM,
  (current, direction: AttritionDirection) => {
    let newAttrition =
      current +
      (direction === AttritionDirection.Dampen
        ? ATTRITION_DELTA_DAMPENING
        : ATTRITION_DELTA_INTENSIFIER);

    if (newAttrition < ATTRITION_MINIMUM) {
      newAttrition = ATTRITION_MINIMUM;
    }

    if (newAttrition > ATTRITION_MAXIMUM) {
      newAttrition = ATTRITION_MAXIMUM;
    }

    return newAttrition;
  },
);

export const attritionGrace = atomWithReducer(0, (current, delta?: number) => {
  if (delta !== undefined) {
    const newAttritionGrace = current - delta;

    if (newAttritionGrace < 0) {
      return 0;
    }

    return newAttritionGrace;
  }

  return ATTRITION_GRACE;
});
