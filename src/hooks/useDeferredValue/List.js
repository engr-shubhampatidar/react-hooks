import React, { useMemo, useDeferredValue } from "react";

export const List = ({ input }) => {
  const LIST_SIZE = 20000;

  const deferredValue = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredValue}</div>);
    }
    return l;
  }, [deferredValue]);

  return list;
};
