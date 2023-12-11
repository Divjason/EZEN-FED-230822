import React, { useState, useEffect } from "react";
import "./App01.css";

const App01 = () => {
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log("useEffect1 Fire");
  }, []);
  useEffect(() => {
    console.log("useEffect2 Fire");
  }, [counter2]);
  let counter = 0;
  const increase = () => {
    counter += 1;
    setCounter2(counter2 + 1);
    console.log(`counter는 ${counter} counter2는 ${counter2}`);
  };
  return (
    <div className="App01">
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
};

export default App01;
