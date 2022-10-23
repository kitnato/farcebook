import ProgressBar from "react-bootstrap/ProgressBar";

import { UIVariant } from "@farcebook/types";

export default function LabelledProgressBar({
  isContinuous = false,
  label,
  value,
  variant = UIVariant.Primary,
}: {
  isContinuous?: boolean;
  label?: string;
  value: number;
  variant?: UIVariant;
}) {
  return (
    <div className="position-relative w-100">
      <ProgressBar
        animated={isContinuous}
        now={isContinuous ? 100 : value}
        striped={isContinuous}
        variant={variant}
      />

      <small
        className="font-monospace position-absolute text-light"
        style={{
          letterSpacing: 1,
          right: "50%",
          textShadow:
            "-1px 1px 1px #212529, 1px 1px 1px #212529, 1px -1px 1px #212529, -1px -1px 1px #212529",
          top: 0,
          transform: "translateX(50%)",
        }}
      >
        {label}
      </small>
    </div>
  );
}
