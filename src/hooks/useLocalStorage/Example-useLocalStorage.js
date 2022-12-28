import React from "react";
import { useUpdateLogger } from "../useUpdateLogger";
import { useLocalStorage } from "./useLocalStorage";

export const ExampleUseLocalStorage = () => {
  const [input, setInput] = useLocalStorage("name", "");

  useUpdateLogger(input);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
