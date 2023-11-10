import { useEffect, useState } from "react";
import Products from "./components/Products/Products";

function App() {
  const [name, setName] = useState("Ahmet");
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log("ilk yüklendiğinde çalışsın. bir daha çalışmasın");
  // }, []);

  useEffect(() => {
    console.log("state e bağlı çalışsın");
  }, [counter]);

  return (
    <div className="container mx-auto">
      <b>{name}</b>
      <button onClick={() => setName(name === "Ahmet" ? "Mehmet" : "Ahmet")}>
        Değiştir
      </button>
      <br />
      <b>{counter}</b>
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <Products />
    </div>
  );
}

export default App;
