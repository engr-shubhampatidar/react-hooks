import React, { useState, useRef } from "react";
import CustomInput from "./CustomInput";

export const ExampleUseImperativeHandle = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  return (
    <>
      <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
        <br />
        <CustomInput
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
        <a
          href="https://blog.webdevsimplified.com/2022-06/use-imperative-handle/"
          target="_blank"
        >
          useImperativeHandle Blog
        </a>
      </div>
    </>
  );
};
