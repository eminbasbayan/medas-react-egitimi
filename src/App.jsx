import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Header from "./components/UI/Header";

function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <div className="container mx-auto">
      <Header cart={cart} />
      <Products setCart={setCart} />
    </div>
  );
}

export default App;
