import { useState } from "react";

export const useToggle = (defaultValue) => {
  const [state, setState] = useState(defaultValue);

  /*  toggle is being passed a value, 
  if it is a boolean, then set the state to that value, 
  otherwise, toggle the state */
  const toggle = (value) => {
    setState((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [state, toggle];
};
