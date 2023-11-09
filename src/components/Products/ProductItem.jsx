import "./ProductItem.css";

function ProductItem(props) {
  console.log(props);
  return (
    <div className="product-item">
      <img src={props.imageUrl} alt="" className="product-image" />
      <div className="product-info">
        <strong className="product-title">{props.productTitle}</strong>
        <span className="product-price">{props.productPrice}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
