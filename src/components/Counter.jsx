import React, { useState } from "react";

function Counter() {
  const number = 5;
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Ahmet");
  //   let counter = 0;

  function arttir() {
    // counter++;
    setCounter(counter + number);
  }

  function azalt() {
    // counter--;
    setCounter(counter - number);
  }

  function ismiDegistir() {
    setName(name === "Ahmet" ? "Mehmet" : "Ahmet");
  }

  console.log(counter);
  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <h3>{name}</h3>
      <button onClick={ismiDegistir}>İsmi Değiştir</button>
      <button onClick={arttir}>Arttır</button>
      <strong>{counter}</strong>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}

export default Counter;
