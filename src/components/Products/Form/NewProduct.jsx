import { useState } from "react";

function NewProduct() {
  const [productData, setProductData] = useState({
    productTitle: "",
    productPrice: "",
    imageUrl: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(productData);
  }

  return (
    <form className="product-form mt-4 flex gap-x-2" onSubmit={handleSubmit}>
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün adı giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
          name="productTitle"
          onChange={handleChange}
        />
      </div>
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Fiyatı</label>
        <input
          type="text"
          placeholder="Ürün fiyatı giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
          name="productPrice"
          onChange={handleChange}
        />
      </div>
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Görseli</label>
        <input
          type="text"
          placeholder="Ürün url giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
          name="imageUrl"
          onChange={handleChange}
        />
      </div>
      <button className="bg-green-600 text-white w-20 rounded-md">Ekle</button>
    </form>
  );
}

export default NewProduct;
