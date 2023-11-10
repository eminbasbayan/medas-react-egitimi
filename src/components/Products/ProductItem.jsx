import { useState } from "react";
import "./ProductItem.css";

function ProductItem(props) {
  const { imageUrl, productTitle, productPrice, setName, nameChange } = props;
  const [title, setTitle] = useState(productTitle);
  const username = "eminbasbayan";

  function handleNameChange() {
    setTitle("Değiştirildi");
    // setName("Mehmet");
    nameChange(username);
  }

  return (
    <div className="product-item">
      <img src={imageUrl} alt="" className="product-image" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{productPrice}₺</span>
        <button onClick={handleNameChange}>Title Degistir</button>
      </div>
    </div>
  );
}

export default ProductItem;
