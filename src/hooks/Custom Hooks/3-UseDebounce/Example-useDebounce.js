import React, { useState } from "react";
import { useDebounce } from "./useDebounce";

export const ExampleUseDebounce = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useDebounce(() => alert(value), 1000, [value]);

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
