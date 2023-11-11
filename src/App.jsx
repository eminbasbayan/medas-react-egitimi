import { useContext, useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Header from "./components/UI/Header";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div
      className={`container mx-auto ${
        themeMode === "Dark" && "bg-black text-white"
      } `}
    >
      <Header />
      <Products />
    </div>
  );
}

export default App;
