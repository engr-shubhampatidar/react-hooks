import React, { useEffect, useState } from "react";

export const ExampleUseEffect = () => {
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);

  // console.log("render");

  // useEffect(() => {
  //   console.log("on Mount");
  //   // this get run on component mount
  // }, []);

  // useEffect(() => {
  //   console.log("resource type changed");
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <>
      <a href="/">Back</a>
      {/* <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType} </h1>
      {items.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))} */}
      <br />
      {windowWidth}
    </>
  );
};
