import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import axios from "axios";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);

  async function fetchProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        const data = response.data;
        setProducts(data);
      } else {
        console.log("lütfen tekrar deneyin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products flex gap-4 flex-wrap">
      {!props.cart &&
        products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      {props.cart && cartItems.length === 0 ? (
        <h3 className="text-2xl font-bold">Sepette hiç ürün yok</h3>
      ) : (
        cartItems.map((item) => (
          <ProductItem product={item} key={item.id} cart={props.cart} />
        ))
      )}
    </div>
  );
};

export default Products;
