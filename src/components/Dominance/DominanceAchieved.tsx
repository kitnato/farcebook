import { useAtomValue } from "jotai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { showGameOver } from "@farcebook/atoms/show";

export function DominanceAchieved() {
  const showGameOverValue = useAtomValue(showGameOver);

  return (
    <Modal show={showGameOverValue}>
      <Modal.Header closeButton>
        <Modal.Title>Dominance achieved</Modal.Title>
      </Modal.Header>

      <Modal.Body>Do it all over again?</Modal.Body>

      <Modal.Footer>
        <Button onClick={() => window.location.reload()} variant="outline-primary">
          Um ...
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
