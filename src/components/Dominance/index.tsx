import { useAtomValue } from "jotai";
import Fade from "react-bootstrap/Fade";

import { likes } from "@farcebook/atoms/likes";
import { showElement } from "@farcebook/atoms/show";
import LabelledProgressBar from "@farcebook/components//LabelledProgressBar";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import { LIKES_MAXIMUM } from "@farcebook/constants/LIKES";
import { ElementKey, UIVariant } from "@farcebook/types";

export default function Dominance() {
  const likesValue = useAtomValue(likes);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.Dominance] && likesValue <= LIKES_MAXIMUM}>
      <div style={{ marginBottom: 24, marginTop: 24 }}>
        <LabelledProgressBar
          label={`${likesValue.toLocaleString(LOCALE)} / ${LIKES_MAXIMUM.toLocaleString(LOCALE)}`}
          value={(likesValue / LIKES_MAXIMUM) * 100}
          variant={UIVariant.Red}
        />
      </div>
    </Fade>
  );
}
