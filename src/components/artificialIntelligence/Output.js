import { memo } from "react";

function Output({ prediction, probability }) {
  return (
    <h2 className="my-2">
      {prediction != null
        ? `Tahmin: ${prediction} (${(probability * 100).toFixed(2)}%)`
        : "Bir sayı (0-9) çizin"}
    </h2>
  );
}

export default memo(Output);
