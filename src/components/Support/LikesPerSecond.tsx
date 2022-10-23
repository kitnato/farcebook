import { useAtomValue } from "jotai";
import Fade from "react-bootstrap/Fade";

import { likesPerSecond } from "@farcebook/atoms/likes";
import { showElement } from "@farcebook/atoms/show";
import SupportElement from "@farcebook/components//Support/SupportElement";
import { ElementKey } from "@farcebook/types";

export default function LikesPerSecond() {
  const likesPerSecondValue = useAtomValue(likesPerSecond);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.LikesPerSecond]}>
      <div>
        <SupportElement label="Likes per second" value={likesPerSecondValue} />
      </div>
    </Fade>
  );
}
