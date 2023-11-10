import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
function Products() {
  return (
    <div className="products">
      {productData.map((product) => (
        <ProductItem
          imageUrl={product.imageUrl}
          productTitle={product.productTitle}
          productPrice={product.productPrice}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default Products;
