import React, { useState } from "react";
import { useTimeout } from "./useTimeout";

export const ExampleUseTimeout = () => {
  const [value, setValue] = useState(10);

  const { clear, reset } = useTimeout(() => setValue(0), 1000);

  return (
    <div>
      {JSON.stringify(value)}
      <button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
};
