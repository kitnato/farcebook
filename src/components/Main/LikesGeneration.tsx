import { useAtomValue } from "jotai";
import Fade from "react-bootstrap/Fade";
import Stack from "react-bootstrap/Stack";

import { engagementDelta } from "@farcebook/atoms/engagement";
import { likeWeight } from "@farcebook/atoms/likes";
import { showElement } from "@farcebook/atoms/show";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import { ElementKey } from "@farcebook/types";

export default function LikesGeneration() {
  const engagementDeltaValue = useAtomValue(engagementDelta);
  const likeWeightValue = useAtomValue(likeWeight);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.Engagement]}>
      <Stack className="text-center">
        <span>
          Each click generates&nbsp;
          <strong className="font-monospace">{engagementDeltaValue.toLocaleString(LOCALE)}</strong>
          &nbsp;Engagement.
        </span>

        <span>
          Each Engagement generates&nbsp;
          <strong className="font-monospace">{likeWeightValue.toLocaleString(LOCALE)}</strong>
          {likeWeightValue === 1 ? " Like" : " Likes"}.
        </span>
      </Stack>
    </Fade>
  );
}
