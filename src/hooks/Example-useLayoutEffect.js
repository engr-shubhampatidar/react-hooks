import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

export const ExampleUseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef(null);
  const button = useRef(null);

  // useLayoutEffect code will delay the painting of a component since it runs synchronously
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  // useEffect is asynchronous and will not delay the paint
  useEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
};
