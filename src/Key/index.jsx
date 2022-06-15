import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Key = () => {
  // const [numbers, setNumbers] = useState([0, 1, 2, 3, 4]);
  const [numbers, setNumbers] = useState([
    { id: "0", num: 0 },
    { id: "1", num: 0 },
    { id: "2", num: 0 },
  ]);

  // const handleAddFirst = () => {
  //   setNumbers((x) => [x.length, ...x]);
  // };

  // const handleAddLast = () => {
  //   setNumbers((x) => [...x, x.length]);
  // };

  // const handleRemove = (index) => {
  //   setNumbers((x) => [...x.slice(0, index), ...x.slice(index + 1)]);
  // };
  // console.log(React.createElement("div"));

  // useEffect(() => {
  //   console.log("numbers", numbers);
  // }, [numbers]);

  return (
    <div>
      {numbers.map(({ id, num }) => (
        <div key={id}>{num}</div>
      ))}
      <hr />
      {numbers.map(({ id, num }) => (
        <div key={id}>{num}</div>
      ))}
    </div>
  );
};

export default Key;
