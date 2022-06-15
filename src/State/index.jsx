import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("coke");

  //   const handleClickName = () => setName((name) => name + 1);
  //   const handleClickCount = () => setCount((count) => count + 1);

  //   const handleClick = () => {
  //     setName((name) => name + 1);
  //     setCount((count) => count + 1);
  //   };
  const handleClick = () => {
    setName((name) => name + 1);
    setTimeout(() => {
      setCount((count) => count + 1);
    });
  };

  useEffect(() => {
    console.log("state update");
  });

  console.log("Rendering State component");

  return (
    <div>
      <div>
        <p>{count}</p>
        <p>{name}</p>
        <button onClick={handleClick}>클릭</button>
        {/* <button onClick={handleClickName}>클릭name</button> */}
        {/* <button onClick={handleClickCount}>클릭count</button> */}
      </div>
    </div>
  );
}

export default State;
