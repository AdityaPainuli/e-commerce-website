import React from "react";
import "./product.css";

// Going to take {name , img  ,variant , cut_price , price} prop .

function Product({ name, img, variant, cut_price, price }) {
  return (
    <div className="product">
      <img src={img} alt="Product-Image" />
      <div className="product__info">
        <p>{name}</p>
        <p className="variant">{variant}t</p>
        <div className="product__price">
          <span className="gray-color cutted">Rs {cut_price}</span>
          <span>Rs {price}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
