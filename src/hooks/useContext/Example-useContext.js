import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export const ExampleUseContext = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
    borderRadius: "0.5rem",
    fontFamily: "monospace",
    fontSize: "1.25rem",
    // fontWeight: "bold",
    // textTransform: "uppercase",
    // letterSpacing: "1.5px",
    // lineHeight: "1.5em",
    // textDecoration: "none",
    // verticalAlign: "middle",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // whiteSpace: "nowrap",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
  };

  return (
    <>
      <a href="/">Back</a>
      <br />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>{darkTheme ? "Dark Theme" : "Light Theme"}</div>
    </>
  );
};
