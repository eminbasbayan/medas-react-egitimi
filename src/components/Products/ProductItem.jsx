import "./ProductItem.css";

function ProductItem(props) {
  const { imageUrl, productTitle, productPrice } = props;

  return (
    <div className="product-item">
      <img src={imageUrl} alt="" className="product-image" />
      <div className="product-info p-3">
        <strong className="product-title">{productTitle}</strong>
        <span className="product-price">{productPrice}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
