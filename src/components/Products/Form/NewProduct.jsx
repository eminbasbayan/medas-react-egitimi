function NewProduct() {
  return (
    <form className="product-form mt-4 flex gap-x-2">
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün adı giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
        />
      </div>
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Fiyatı</label>
        <input
          type="text"
          placeholder="Ürün adı giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
        />
      </div>
      <div className="product-form-input inline-flex flex-col">
        <label>Ürün Görseli</label>
        <input
          type="text"
          placeholder="Ürün adı giriniz..."
          className="border-[1px] border-solid border-[black] p-2 rounded-md"
        />
      </div>
      <button className="bg-green-600 text-white w-20 rounded-md">
        Ekle
      </button>
    </form>
  );
}

export default NewProduct;
