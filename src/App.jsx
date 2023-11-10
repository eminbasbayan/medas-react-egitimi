import { Fragment } from "react";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <Fragment>
      <Products />
      <Button title="Ekle" addClass="success" />
    </Fragment>
  );
}

export default App;
