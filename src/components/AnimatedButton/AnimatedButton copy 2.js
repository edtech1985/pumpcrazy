import React, { useState } from "react";
import "./AnimatedButton.css";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function AnimatedButton() {
  const [isAnimated, setIsAnimated] = useState(false);

  //   const { cartItems, updateCartItemQuantity, removeFromCart } =
  const { cartItems } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleButtonClick = () => {
    if (!isAnimated) {
      setIsAnimated(true);
      setTimeout(() => {
        window.location.href = `https://wa.me/5551993358455?text=${encodeURIComponent(
          `Olá, Pump Crazy Cookies! Escolhi os seguintes itens:\n\n${cartItems
            .map((item) => `${item.quantity} ${item.name}`)
            .join("\n")}, total R$ ${getTotalPrice().toFixed(
            2
          )}.\n\nQual o valor da entrega para meu endereço?`
        )}`;
      }, 7500);
    }
  };

  return (
    <button
      className={`order ${isAnimated ? "animate" : ""}`}
      onClick={handleButtonClick}
    >
      <span className="default">Finalizar Pedido</span>
      <span className="success">
        Pedido Enviado
        <svg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <div className="box"></div>
      <div className="truck">
        <div className="back"></div>
        <div className="front">
          <div className="window"></div>
        </div>
        <div className="light top"></div>
        <div className="light bottom"></div>
      </div>
      <div className="lines"></div>
    </button>
  );
}

export default AnimatedButton;
