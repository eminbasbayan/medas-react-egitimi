import ProductItem from "./ProductItem";
import "./Products.css";
import { productData } from "../../productData";
import { useState } from "react";
function Products() {
  const [name, setName] = useState("Ahmet");

  function nameChange(username) {
    setName(username);
    console.log(username);
  }

  return (
    <div className="products">
      <h2>{name}</h2>
      {productData.map((product) => (
        <ProductItem
          imageUrl={product.imageUrl}
          productTitle={product.productTitle}
          productPrice={product.productPrice}
          key={product.id}
          setName={setName}
          nameChange={nameChange}
        />
      ))}
    </div>
  );
}

export default Products;
