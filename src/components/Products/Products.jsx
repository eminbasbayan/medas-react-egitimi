import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
import NewProduct from "./Form/NewProduct";
import { useEffect, useState } from "react";
function Products() {
  const [products, setProducts] = useState(productData);

  function addNewProduct(newProduct) {
    const newId = products[products.length - 1].id + 1;
    setProducts([...products, { id: newId, ...newProduct }]);
  }

  function fetchProductsData() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((products) => {
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
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("işlem tamamlandı"));
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="products flex flex-col">
      <NewProduct addNewProduct={addNewProduct} setProducts={setProducts} />
      <button onClick={fetchProductsData}>Ürünleri Getir</button>
      <div className="products-wrapper gap-4 mt-4">
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
