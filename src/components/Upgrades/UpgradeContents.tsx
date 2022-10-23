import { WritableAtom, useAtom } from "jotai";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";
import AcquireButton from "@farcebook/components//AcquireButton";
import { MAXIMUM } from "@farcebook/constants/GLOBAL";
import { UPGRADE_LABELS } from "@farcebook/constants/UPGRADES";
import { UpgradableElementKey } from "@farcebook/types";

export default function UpgradeContents({
  atom,
  elementKey,
  isAtMaximum = false,
}: {
  atom: WritableAtom<number, unknown>;
  elementKey: UpgradableElementKey;
  isAtMaximum?: boolean;
}) {
  const [rankValue, setRank] = useAtom(atom);

  const { description, name } = UPGRADE_LABELS[elementKey];

  return (
    <Row className="align-items-center">
      <Col xs={3}>
        <OverlayTrigger overlay={<Tooltip>{description}</Tooltip>}>
          <span style={{ cursor: "help" }}>{name} rank:</span>
        </OverlayTrigger>
      </Col>

      <Col xs={2}>
        <strong className="font-monospace">{isAtMaximum ? MAXIMUM : rankValue}</strong>
      </Col>

      <Col>
        {!isAtMaximum && <AcquireButton elementKey={elementKey} increment={setRank} isSmall />}
      </Col>
    </Row>
  );
}
