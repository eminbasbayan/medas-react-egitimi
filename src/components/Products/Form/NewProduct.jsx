import { useState } from "react";

function NewProduct() {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleTitleChange(event) {
    setProductTitle(event.target.value);
  }

  function handlePriceChange(event) {
    setProductPrice(event.target.value);
  }

  function handleUrlChange(event) {
    setImageUrl(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ productTitle, productPrice, imageUrl });
  }

  return (
    <form className="product-form mt-4 flex gap-x-2" onSubmit={handleSubmit}>
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün adı giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
          onChange={handleTitleChange}
        />
      </div>
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Fiyatı</label>
        <input
          type="text"
          placeholder="Ürün fiyatı giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
          onChange={handlePriceChange}
        />
      </div>
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Görseli</label>
        <input
          type="text"
          placeholder="Ürün url giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
          onChange={handleUrlChange}
        />
      </div>
      <button className="bg-green-600 text-white w-20 rounded-md">Ekle</button>
    </form>
  );
}

export default NewProduct;
