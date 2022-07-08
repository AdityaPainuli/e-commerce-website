import React from "react";
import "./product.css";

// Going to take {name , img  ,variant , cut_price , price} prop .

function Product({
  name,
  img,
  variant,
  cut_price,
  price,
  setCart,
  id,
  product_list,
  cart,
}) {
  return (
    <div className="product">
      <img src={img} alt="Product-Image" className="product_img" />
      <div className="product__info">
        <p>{name}</p>
        <p className="variant">{variant}t</p>
        <div className="product__price">
          <span className="gray-color cutted">Rs {cut_price}</span>
          <span>Rs {price}</span>
        </div>
      </div>
      <div className="product-btn-container">
        <button
          className="btn-light product-btn"
          onClick={() => {
            const new_product = product_list.filter((c) => c.id === id);
            // setCart([...cart, new_product]);
            const new_cart = [...cart, new_product];
            setCart(new_cart);
          }}
        >
          Add to Cart.
        </button>
      </div>
    </div>
  );
}

export default Product;
