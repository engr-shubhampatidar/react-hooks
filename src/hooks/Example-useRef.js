import React, { useState, useRef } from "react";

export const ExampleUseRef = () => {
  const [name, setName] = useState("");
  const myRef = useRef(null);

  const handleFocus = () => {
    myRef.current.focus();
  };

  return (
    <div>
      <a href="/">Back</a>
      <br />
      <input
        ref={myRef}
        type="text"
        name="Name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        value={name}
      />
      <br />
      {`Hello ${name}`}
      <br />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};
