import React from "react";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <React.Fragment>
      <h1>Hello, world!</h1>
      <Products></Products>
      <br />
      <Button title="Sil" addClass="danger" />
      <Button title="Kaydet" addClass="success" />
      <Button title="Düzenle" addClass="warning" />
    </React.Fragment>
  );
}

export default App;
