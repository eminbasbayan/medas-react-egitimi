import ProductItem from "./ProductItem";
import "./Products.css";

const productData = [
  {
    id: 1,
    productTitle: "Elma",
    imageUrl:
      "https://images.unsplash.com/photo-1611529695235-cbe25cddec4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productPrice: 10,
  },
  {
    id: 2,
    productTitle: "Üzüm",
    imageUrl:
      "https://images.unsplash.com/photo-1646052788724-7077147686c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productPrice: 30,
  },
];

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
