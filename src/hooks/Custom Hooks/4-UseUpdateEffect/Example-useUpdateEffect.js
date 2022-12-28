import React, { useState } from "react";
import { useUpdateEffect } from "./useUpdateEffect";

export const ExampleUseUpdateEffect = () => {
  const [count, setCount] = useState(10);

  // This will only run when the count changes from second render onwards
  // but did not work in React.StrictMode
  useUpdateEffect(() => alert("Value has changed"), [count]);

  return (
    <div>
      {JSON.stringify(count)}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
