import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Header from "./components/UI/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Products />
    </div>
  );
}

export default App;
