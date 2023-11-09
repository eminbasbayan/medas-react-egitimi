import React from "react";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";

function App() {
  return (
    <React.Fragment>
      <h1>Hello, world!</h1>
      <Card title="Default card title">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </React.Fragment>
  );
}

export default App;
