import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Achievements } from "@farcebook/components/Achievements";
import { Dominance } from "@farcebook/components/Dominance";
import { Confetti } from "@farcebook/components/Dominance/Confetti";
import { DominanceAchieved } from "@farcebook/components/Dominance/DominanceAchieved";
import { Main } from "@farcebook/components/Main";
import { Support } from "@farcebook/components/Support";

export function App() {
  return (
    <>
      <Container>
        <Row>
          <Dominance />
        </Row>

        <Row>
          <Col>
            <Support />
          </Col>

          <Col>
            <Main />
          </Col>

          <Col>
            <Achievements />
          </Col>
        </Row>
      </Container>

      <DominanceAchieved />

      <Confetti />
    </>
  );
}
