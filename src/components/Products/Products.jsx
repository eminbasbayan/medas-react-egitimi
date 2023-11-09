import ProductItem from "./ProductItem";
import "./Products.css";

const productData = [
  {
    id: 1,
    productTitle: "Elma",
    imageUrl: "https://images.unsplash.com/photo-1646052788724-7077147686c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productPrice: 10
  }
]

function Products() {
  const imageUrl =
    "https://images.unsplash.com/photo-1611529695235-cbe25cddec4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const productTitle = "Elma";
  const productPrice = 10;

  return (
    <div className="products">
      <ProductItem
        imageUrl={imageUrl}
        productTitle={productTitle}
        productPrice={productPrice}
        name="Emin"
      ></ProductItem>
      <ProductItem
        imageUrl="https://images.unsplash.com/photo-1646052788724-7077147686c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        productTitle="Üzüm"
        productPrice={30}
      ></ProductItem>
      <ProductItem
        imageUrl="https://images.unsplash.com/photo-1646052788724-7077147686c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        productTitle="Üzüm"
        productPrice={30}
      ></ProductItem>
      <ProductItem
        imageUrl="https://images.unsplash.com/photo-1646052788724-7077147686c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        productTitle="Üzüm"
        productPrice={30}
      ></ProductItem>
      <ProductItem
        imageUrl="https://images.unsplash.com/photo-1646052788724-7077147686c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        productTitle="Üzüm"
        productPrice={30}
      ></ProductItem>
    </div>
  );
}

export default Products;
