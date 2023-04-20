import { ProgressBar } from "react-bootstrap";

import type { BootstrapColor } from "@farcebook/types";

export function LabelledProgressBar({
  isContinuous = false,
  label,
  value,
  variant = "primary",
}: {
  isContinuous?: boolean;
  label?: string;
  value: number;
  variant?: BootstrapColor;
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
