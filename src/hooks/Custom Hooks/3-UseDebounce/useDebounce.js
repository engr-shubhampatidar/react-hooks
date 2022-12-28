import { useEffect } from "react";
import { useTimeout } from "../2-UseTimeout/useTimeout";

export const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [reset, ...dependencies]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(clear, []);
};
