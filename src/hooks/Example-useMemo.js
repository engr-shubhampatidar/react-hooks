import React, { useState, useMemo } from "react";

export const ExampleUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // useMemo is used to cache the result of a function,
  // it will only re - run the function if the dependencies change
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  // will stop re-initializing the themeStyle object
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <div style={themeStyle}>
      <a href="/">Back</a>
      <br />
      <input
        type="number"
        placeholder="Your Favorite Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <p>Number: {number}</p>

      <p>Double: {doubleNumber}</p>

      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

const slowFunction = (number) => {
  let i = 0;
  for (i; i < 1000000000; i++) {}
  return number * 2;
};
