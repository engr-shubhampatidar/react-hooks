import React, { useCallback, useState } from "react";
import { List } from "./List";

export const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // this get called only when count changes
  const getNumber = useCallback(() => {
    console.log("Calling Function");
    return [count, count + 1, count + 2];
  }, [count]);

  const themeStyle = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div style={themeStyle}>
      <a href="/">Back</a>
      <br />
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <br />
      <List getItems={getNumber} />
    </div>
  );
};
