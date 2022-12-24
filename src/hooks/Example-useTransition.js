import React, { useState, useTransition } from "react";

export const ExampleUseTransition = () => {
  const [isPending, startTransition] = useTransition();

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 1000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) l.push(i);
      setList(l);
    });
  };

  return (
    <>
      <a href="/">Back</a>
      <br />
      <input
        type="text"
        placeholder="input"
        value={input}
        onChange={handleChange}
      />
      <br />
      {isPending
        ? "Loading"
        : list.map((item) => <div key={item}>{input}</div>)}
    </>
  );
};
