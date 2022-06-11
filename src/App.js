import { useEffect, useState, useRef } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  }, []);
  // console.log("count", count);

  useEffect(() => {
    setInterval(() => {
      // setCount(count + 1);
      // console.log("setInterval start");
      // setCount((prev) => {
      //   console.log("setCount", prev);
      //   return prev + 1;
      // });
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <div>부모{count}</div>
      <div>{isShow && <Coke count={count} />}</div>
    </div>
  );
}

function Coke({ count }) {
  console.log("coke", count);
  const [text, setText] = useState("coke");

  const handleClick = () => {
    console.log("click count", count);
    setText((prev) => prev + count);
  };
  return (
    <div>
      <div>자식{count}</div>
      <div>text{text}</div>
      <div>
        <button onClick={handleClick}>자식 클릭</button>
      </div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {}
  }, [delay]);
}

export default App;
