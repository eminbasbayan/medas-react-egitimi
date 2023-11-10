import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
import NewProduct from "./Form/NewProduct";
function Products() {
  return (
    <div className="products flex flex-col">
      <NewProduct />
      <div className="products-wrapper flex gap-4 mt-4">
        {productData.map((product) => (
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
