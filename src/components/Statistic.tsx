import { Stack } from "react-bootstrap";

import { UIStatisticVariant } from "@farcebook/types";

export default function Statistic({
  headerText,
  labelText,
  variant = UIStatisticVariant.Normal,
}: {
  headerText: string;
  labelText: string;
  variant?: UIStatisticVariant;
}) {
  const monoSpace = "font-monospace";
  const upperCase = "text-uppercase";

  let Header = () => <h3 className={monoSpace}>{headerText}</h3>;
  let Label = () => <span className={upperCase}>{labelText}</span>;

  switch (variant) {
    case UIStatisticVariant.Large:
      Header = () => <h2 className={monoSpace}>{headerText}</h2>;
      break;
    case UIStatisticVariant.Small:
      Header = () => <h5 className={monoSpace}>{headerText}</h5>;
      Label = () => <small className={upperCase}>{labelText}</small>;
      break;
  }

  return (
    <Stack className="align-items-center">
      <Header />

      <Label />
    </Stack>
  );
}
