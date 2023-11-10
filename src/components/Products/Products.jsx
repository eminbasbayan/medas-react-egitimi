import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
import NewProduct from "./Form/NewProduct";
import { useState } from "react";
function Products() {
  const [products, setProducts] = useState(productData);

  function addNewProduct(newProduct) {
    const newId = products[products.length - 1].id + 1;
    setProducts([...products, { id: newId, ...newProduct }]);
  }

  return (
    <div className="products flex flex-col">
      <NewProduct addNewProduct={addNewProduct} setProducts={setProducts} />
      <div className="products-wrapper flex gap-4 mt-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            imageUrl={product.imageUrl}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            setProducts={setProducts}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
