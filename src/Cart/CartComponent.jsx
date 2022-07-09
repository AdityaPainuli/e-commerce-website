import React from "react";
import "./cart.css";
import { AiFillInfoCircle } from "react-icons/ai";

const CartComponent = ({ cart, setCart, username }) => {
  const removeFromBasket = (id) => {
    const FirstProductIndex = cart.findIndex((c) => c[0].id === id);
    const new_cart = [...cart];
    if (FirstProductIndex >= 0) {
      new_cart.splice(FirstProductIndex, 1);
      setCart(new_cart);
    } else {
      console.warn(`Cant remove product (id: ${id}) as its not in basket`);
    }
  };
  return (
    <div className="cart__section">
      <div className="cart__section-details">
        <h2>Your Cart🛒🛒</h2>
        <p>Hey, {username} 👋👋</p>
      </div>
      {cart.map((products) => (
        <div className="products__section">
          {products.map((product) => (
            <div className="cart_product">
              <img src={product.img} alt="product-image" />
              <div className="product__cart-description">
                <h6>{product.product_title}</h6>
                <p>({product.product_variant})</p>
                <span>$ {product.price}</span>
              </div>
              <div className="btn-action">
                <button
                  className="btn-dark"
                  onClick={() => removeFromBasket(product.id)}
                >
                  Remove from Cart ❌❌
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
