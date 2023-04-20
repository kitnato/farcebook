import { useAtomValue } from "jotai";
import { Stack } from "react-bootstrap";

import { likes, likesPerSecond } from "@farcebook/atoms/likes";
import { Statistic } from "@farcebook/components/Statistic";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import { useMeasureDifference } from "@farcebook/hooks/useMeasureDifference";
import { UIStatisticVariant } from "@farcebook/types";

export function Likes() {
  const likesValue = useAtomValue(likes);

  useMeasureDifference(likesPerSecond, likesValue);

  return (
    <Stack className="text-center">
      <div>
        <Statistic
          headerText={likesValue.toLocaleString(LOCALE)}
          labelText="Likes"
          variant={UIStatisticVariant.Large}
        />
      </div>
    </Stack>
  );
}
