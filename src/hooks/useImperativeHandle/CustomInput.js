import React, { forwardRef, useImperativeHandle } from "react";

const CustomInput = ({ style, ...props }, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        if (typeof window !== "undefined") {
          window.alert("Focus");
          return;
        }
        console.log("Focus");
      },
    }),
    []
  );

  return (
    <input
      //   ref={ref}
      {...props}
      style={{
        border: "none",
        background: "#ab6e6e",
        padding: ".25em",
        borderBottom: ".1em solid #4F5R2R",
        borderTopRightRadius: "0.25em",
        borderTopLeftRadius: "0.25em",
        ...style,
      }}
    />
  );
};

export default forwardRef(CustomInput);
