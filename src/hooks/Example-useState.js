import React, { useState } from "react";

export const ExampleUseState = () => {
  const [count, setCount] = useState(() => {
    return 4;
  });
  // function version initialization run only once for, use for complex state calculations

  // const [state, setState] = useState({ count: 5, color: "blue" });
  // const { count, color } = state;

  const decrementCount = () => {
    setCount((prev) => prev - 1); /* decrement from previous values */
    // setState((prev) => {
    //   return { ...prev, count: prev.count - 1 };
    // });
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <a href="/">Back</a>
      <button onClick={decrementCount}>-</button>
      <span>
        {count} {/* - {color} */}
      </span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
