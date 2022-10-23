import { useAtomValue, useSetAtom } from "jotai";

import Col from "react-bootstrap/Col";
import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

import { influencers } from "@farcebook/atoms/influencers";
import { showElement } from "@farcebook/atoms/show";
import AcquireButton from "@farcebook/components//AcquireButton";
import InfluencersCount from "@farcebook/components//Influencers/InfluencersCount";
import InfluencersGeneration from "@farcebook/components//Influencers/InfluencersGeneration";
import { ElementKey } from "@farcebook/types";

export default function Influencers() {
  const showElementValue = useAtomValue(showElement);
  const incrementInfluencers = useSetAtom(influencers);

  return (
    <Fade in={showElementValue[ElementKey.Influencers]} mountOnEnter>
      <Stack gap={3}>
        <Row className="align-items-center">
          <Col>
            <InfluencersCount />
          </Col>

          <Col>
            <AcquireButton elementKey={ElementKey.Influencers} increment={incrementInfluencers} />
          </Col>
        </Row>

        <InfluencersGeneration />
      </Stack>
    </Fade>
  );
}
