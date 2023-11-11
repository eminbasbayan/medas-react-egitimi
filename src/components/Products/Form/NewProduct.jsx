import { useState } from "react";
import Modal from "../../UI/Modal";

const initialValues = {
  productTitle: "",
  productPrice: "",
  imageUrl: "",
};

function NewProduct({ addNewProduct, setProducts }) {
  const [productData, setProductData] = useState(initialValues);
  const [showModal, setShowModal] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      productData.productTitle.length === 0 ||
      productData.productPrice.length === 0 ||
      productData.imageUrl.length === 0
    ) {
      setShowModal(true);
      return;
    }
    const newProduct = productData;
    // addNewProduct(newProduct);
    setProductData(initialValues);

    setProducts((prevProducts) => {
      const newId =
        prevProducts.length === 0
          ? 1
          : prevProducts[prevProducts.length - 1].id + 1;
      return [...prevProducts, { id: newId, ...newProduct }];
    });
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
          value={productData.productTitle}
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
          value={productData.productPrice}
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
          value={productData.imageUrl}
        />
      </div>
      <button className="bg-green-600 text-white w-20 rounded-md">Ekle</button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </form>
  );
}

export default NewProduct;
