import { useAtom } from "jotai";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { likes } from "@farcebook/atoms/likes";
import { LOCALE } from "@farcebook/constants/GLOBAL";
import useAcquireCost from "@farcebook/hooks/useAcquireCost";
import { AcquirableElementKey, UIVariant } from "@farcebook/types";

export default function AcquireButton({
  elementKey,
  increment,
  isSmall = false,
}: {
  elementKey: AcquirableElementKey;
  increment: (update?: unknown) => void;
  isSmall?: boolean;
}) {
  const [likesValue, setLikes] = useAtom(likes);

  const cost = useAcquireCost(elementKey);

  const canAcquire = cost <= likesValue;

  return (
    <OverlayTrigger
      overlay={
        <Tooltip>
          Cost: <strong className="font-monospace">{cost.toLocaleString(LOCALE)}</strong> Likes
        </Tooltip>
      }
      placement={isSmall ? "right" : "top"}
    >
      <span className="d-inline-block">
        <Button
          disabled={!canAcquire}
          onClick={() => {
            if (canAcquire) {
              increment();
              setLikes((current) => current - cost);
            }
          }}
          size={isSmall ? "sm" : undefined}
          style={{ width: isSmall ? 140 : 200 }}
          variant={UIVariant.Outline}
        >
          Acquire
        </Button>
      </span>
    </OverlayTrigger>
  );
}
