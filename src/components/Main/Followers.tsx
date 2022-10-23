import { useAtomValue } from "jotai";
import Fade from "react-bootstrap/Fade";
import Stack from "react-bootstrap/Stack";

import { followersCurrent } from "@farcebook/atoms/followers";
import { showElement } from "@farcebook/atoms/show";
import Statistic from "@farcebook/components//Statistic";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import { ElementKey } from "@farcebook/types";

export default function Followers() {
  const followersCurrentValue = useAtomValue(followersCurrent);
  const showElementValue = useAtomValue(showElement);

  return (
    <Fade in={showElementValue[ElementKey.Followers]} mountOnEnter>
      <Stack className="align-items-baseline" direction="horizontal" gap={3}>
        <Statistic
          headerText={followersCurrentValue.toLocaleString(LOCALE)}
          labelText="Followers"
        />
      </Stack>
    </Fade>
  );
}
