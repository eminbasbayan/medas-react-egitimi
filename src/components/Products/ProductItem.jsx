import "./ProductItem.css";

function ProductItem(props) {
  const {
    imageUrl,
    productTitle,
    productPrice,
    setProducts,
    product: { id },
  } = props;

  function handleDelete() {
    if (window.confirm("Silmek istediğinizden emin misiniz?")) {
      setProducts((prevProducts) => {
        return prevProducts.filter((item) => item.id !== id);
      });
    }
  }

  return (
    <div className="product-item">
      <img src={imageUrl} alt="" className="product-image" />
      <div className="product-info p-3">
        <strong className="product-title">{productTitle}</strong>
        <span className="product-price">{productPrice}₺</span>
        <button className="bg-red-600 text-white" onClick={handleDelete}>
          Ürünü Sil
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
