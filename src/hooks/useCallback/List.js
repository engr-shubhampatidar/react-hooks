import React, { useState, useEffect } from "react";

export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  // this get called only when getItems function changes
  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};
