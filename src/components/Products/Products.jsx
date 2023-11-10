import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
import NewProduct from "./Form/NewProduct";
import { useState } from "react";
function Products() {
  const [products, setProducts] = useState(productData);

  function addNewProduct(newProduct) {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  }

  return (
    <div className="products flex flex-col">
      <NewProduct addNewProduct={addNewProduct} setProducts={setProducts} />
      <div className="products-wrapper flex gap-4 mt-4">
        {products.map((product) => (
          <ProductItem
            imageUrl={product.imageUrl}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
