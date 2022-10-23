import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { LOCALE, PRECISION } from "@farcebook/constants/GLOBAL";
import { MEASUREMENT_DEVIATION, MEASUREMENT_SAMPLE } from "@farcebook/constants/MEASUREMENT";

export default function SupportElement({ label, value }: { label: string; value: number }) {
  const [values, setValues] = useState<number[]>([]);

  useEffect(() => {
    setValues((current) => {
      const newValues = [...current, value];

      if (newValues.length > MEASUREMENT_SAMPLE) {
        return newValues.slice(newValues.length - MEASUREMENT_SAMPLE);
      }
      return newValues;
    });
  }, [value]);

  const normalizedValue = (() => {
    const n = values.length;

    if (n === 0) {
      return value;
    }

    const mean = values.reduce((a, b) => a + b, 0) / n;
    const deviation = Math.sqrt(
      values.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) / n
    );

    if (deviation > MEASUREMENT_DEVIATION) {
      return value;
    }

    return mean;
  })();

  return (
    <Row direction="horizontal" gap={3}>
      <Col>{label}:</Col>

      <Col>
        <span className="font-monospace">
          {normalizedValue.toLocaleString(LOCALE, {
            maximumFractionDigits: PRECISION - 1,
            minimumFractionDigits: PRECISION - 1,
          })}
        </span>
      </Col>
    </Row>
  );
}
