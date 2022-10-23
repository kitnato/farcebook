import Stack from "react-bootstrap/Stack";

import ClicksPerSecond from "@farcebook/components//Support/ClicksPerSecond";
import EngagementPerSecond from "@farcebook/components//Support/EngagementPerSecond";
import LikesPerSecond from "@farcebook/components//Support/LikesPerSecond";
import ReachPerSecond from "@farcebook/components//Support/ReachPerSecond";
import Upgrades from "@farcebook/components//Upgrades";

export default function Support() {
  return (
    <Stack gap={5}>
      <Stack gap={3}>
        <ClicksPerSecond />

        <EngagementPerSecond />

        <LikesPerSecond />

        <ReachPerSecond />
      </Stack>

      <Upgrades />
    </Stack>
  );
}
