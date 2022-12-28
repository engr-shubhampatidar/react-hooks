import React from "react";
import { useToggle } from "./useToggle";

export const ExampleUseToggle = () => {
  const [state, toggle] = useToggle(false);

  return (
    <div>
      {JSON.stringify(state)}
      <button onClick={toggle}>Toggle Me</button>
      <button onClick={() => toggle(true)}>Toggle True</button>
      <button onClick={() => toggle(false)}>Toggle false</button>
    </div>
  );
};
