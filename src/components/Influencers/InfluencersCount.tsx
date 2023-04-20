import { useAtomValue } from "jotai";

import { influencers } from "@farcebook/atoms/influencers";
import { Statistic } from "@farcebook/components/Statistic";
import { LOCALE } from "@farcebook/constants/GLOBAL";

export function InfluencersCount() {
  const influencersValue = useAtomValue(influencers);

  return <Statistic headerText={influencersValue.toLocaleString(LOCALE)} labelText="Influencers" />;
}
