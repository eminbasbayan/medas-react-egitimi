import React, { useState } from "react";

function Counter() {
  const number = 5;
  const [counter, setCounter] = useState(0);
  //   let counter = 0;

  function arttir() {
    // counter++;
    setCounter(counter + number);
  }

  function azalt() {
    // counter--;
    setCounter(counter - number);
  }

  console.log(counter);
  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <button onClick={arttir}>Arttır</button>
      <strong>{counter}</strong>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}

export default Counter;
