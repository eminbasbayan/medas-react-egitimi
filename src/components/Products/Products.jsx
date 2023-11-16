import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get(
        "https://my-pos-application-api.onrender.com/api/products/get-all"
      );
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
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Products;
