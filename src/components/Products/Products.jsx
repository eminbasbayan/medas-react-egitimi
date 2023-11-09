import ProductItem from "./ProductItem";
import "./Products.css";
import { productData } from "../../productData";

function Products() {
  return (
    <div className="products">
      {productData.map(function (product) {
        return (
          <ProductItem
            imageUrl={product.imageUrl}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            key={product.id}
          />
        );
      })}
    </div>
  );
}

export default Products;
