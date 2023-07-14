import React, { useContext } from "react";
import "../css/cart.css";
import { AppContext } from "../context/Context";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const { cartCount, setCartCount } = useContext(AppContext);
  if (cartCount.length === 0) {
    alert("your cart is empty");
    return <Navigate to="/product" />;
  }

  const totalPrice = cartCount
    .reduce((total, item) => (total += Number(item.price) * item.qty), 0)
    .toFixed(2);

  const handelAddQty = (id) => {
    const updatedCartCount = cartCount.map((item) => {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });

    setCartCount(updatedCartCount);
  };

  const handelRemoveQty = (id) => {
    const updatedCartCount = cartCount.map((item) => {
      if (item.id === id) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });

    setCartCount(updatedCartCount);
    updatedCartCount.map((elm) =>
      elm.qty === 0 ? handelRemoveItem(id) : null
    );
  };

  const handelRemoveItem = (id) => {
    const removeItem = cartCount.filter((elm) => elm.id !== id);
    setCartCount(removeItem);
  };

  return (
    <div className="cart-section">
      {cartCount.map((elm) => (
        <div className="cart-item" key={elm.id}>
          <div className="item-details">
            <div className="image-container">
              <img src={elm.image} alt="Product" />
            </div>
            <div className="details-container">
              <h3>{elm.title}</h3>
              <p>Price: Rs {elm.price}</p>
            </div>
          </div>
          <div className="controls-container">
            <button onClick={() => handelRemoveItem(elm.id)}>Remove</button>
            <div className="quantity-controls">
              <button
                onClick={() => handelRemoveQty(elm.id)}
                className="quantity-button remove"
              >
                -
              </button>
              <span className="quantity">{elm.qty}</span>
              <button
                onClick={() => handelAddQty(elm.id)}
                className="quantity-button add"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: {totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
