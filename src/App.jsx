import { Fragment } from "react";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="container mx-auto">
      <Products />
      <Button title="Ekle" addClass="success" />
    </div>
  );
}

export default App;
