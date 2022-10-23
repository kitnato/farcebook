import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

import Influencers from "@farcebook/components//Influencers";
import Attrition from "@farcebook/components//Main/Attrition";
import Engagement from "@farcebook/components//Main/Engagement";
import Followers from "@farcebook/components//Main/Followers";
import LikeButton from "@farcebook/components//Main/LikeButton";
import Likes from "@farcebook/components//Main/Likes";
import LikesGeneration from "@farcebook/components//Main/LikesGeneration";
import Reach from "@farcebook/components//Main/Reach";

export default function Main() {
  return (
    <Stack gap={5}>
      <Stack gap={3}>
        <Likes />

        <LikeButton />

        <LikesGeneration />
      </Stack>

      <Stack gap={3}>
        <Row className="align-items-center">
          <Col>
            <Engagement />
          </Col>

          <Col>
            <Attrition />
          </Col>

          <Col>
            <Followers />
          </Col>
        </Row>

        <Reach />
      </Stack>

      <Influencers />
    </Stack>
  );
}
