import { useAtomValue } from "jotai";
import { Fade, Stack } from "react-bootstrap";

import { engagementDelta } from "@farcebook/atoms/engagement";
import { likeWeight } from "@farcebook/atoms/likes";
import { showElement } from "@farcebook/atoms/show";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import { ElementKey } from "@farcebook/types";

export function LikesGeneration() {
  const engagementDeltaValue = useAtomValue(engagementDelta);
  const likeWeightValue = useAtomValue(likeWeight);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.Engagement]}>
      <Stack className="text-center">
        <span>
          <strong className="font-monospace">{engagementDeltaValue.toLocaleString(LOCALE)}</strong>
          &nbsp;Engagement per click
        </span>

        <span>
          <strong className="font-monospace">{likeWeightValue.toLocaleString(LOCALE)}</strong>
          {likeWeightValue === 1 ? " Like" : " Likes"} per Engagement
        </span>
      </Stack>
    </Fade>
  );
}
