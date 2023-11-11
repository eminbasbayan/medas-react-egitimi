import ProductItem from "./ProductItem";
import "./Products.css";
import NewProduct from "./Form/NewProduct";
import { useEffect, useState } from "react";
function Products(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addNewProduct(newProduct) {
    const newId = products[products.length - 1].id + 1;
    setProducts([...products, { id: newId, ...newProduct }]);
  }

  async function fetchProductsData() {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      const newProducts = products.map(
        ({ id, category, title, price, image }) => {
          const newItem = {
            id: id,
            category: category,
            productTitle: title,
            productPrice: price,
            imageUrl: image,
          };
          return newItem;
        }
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("işlem bitti.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="products flex flex-col">
      {/* <NewProduct addNewProduct={addNewProduct} setProducts={setProducts} /> */}
      {/* <button onClick={fetchProductsData}>Ürünleri Getir</button> */}
      <h1 className="text-center text-3xl">Ürün Listesi</h1>
      {isLoading && <span>Loading...</span>}
      <div className="products-wrapper gap-4 mt-4">
        {!isLoading &&
          products.map((product) => (
            <ProductItem
              product={product}
              imageUrl={product.imageUrl}
              productTitle={product.productTitle}
              productPrice={product.productPrice}
              setProducts={setProducts}
              key={product.id}
              setCart={props.setCart}
            />
          ))}
      </div>
    </div>
  );
}

export default Products;
