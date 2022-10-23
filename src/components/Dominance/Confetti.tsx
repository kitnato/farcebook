import { useAtomValue } from "jotai";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";

import { showGameOver } from "@farcebook/atoms/show";
import particlesOptions from "@farcebook/components//Dominance/particles.json";

export default function Confetti() {
  const showGameOverValue = useAtomValue(showGameOver);

  if (!showGameOverValue) {
    return null;
  }

  return <Particles init={loadFull} options={particlesOptions as ISourceOptions} />;
}
