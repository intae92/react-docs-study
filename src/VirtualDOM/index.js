import React, { useState } from "react";

function VirtualDOM() {
  const [list, setList] = useState(["1", "2", "3", "4", "5"]);
  const handleAdd = () => {
    console.log("add");

    setList((prevList) => prevList.concat(prevList.length + 1));
  };

  const handleRemove = () => {
    console.log("remove");
    setList((prevList) => prevList.slice(-1));
  };

  return (
    <div>
      <button onClick={handleAdd}>추가</button>
      <button onClick={handleRemove}>삭제</button>
      <div>
        <ul>
          {list.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default VirtualDOM;
