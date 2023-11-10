import { Fragment } from "react";
import React from "react";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  function handleClick() {
    console.log("run");
  }

  return (
    <Fragment>
      <Products />
      {/* <Button title="Düzenle" addClass="danger"  /> */}
      <button onClick={handleClick}>Ekle</button>
      <button onClick={() => console.log("run")}>Ekle</button>
      <button
        onClick={() => {
          console.log("run");
        }}
      >
        Ekle
      </button>
      <button onClick={()=> handleClick(5)}>Parametre Gönderme</button>
    </Fragment>
  );
}

export default App;
