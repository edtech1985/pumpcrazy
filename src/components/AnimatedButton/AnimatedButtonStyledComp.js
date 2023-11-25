import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { CartContext } from "../CartContext";

// Keyframes para a animação do caminhão
const truckAnimation = keyframes`
    10%, 30% {
        transform: translateX(-164px);
    }
    40% {
        transform: translateX(-104px);
    }
    60% {
        transform: translateX(-224px);
    }
    75%, 100% {
        transform: translateX(24px);
    }
`;

// Keyframes para a animação das linhas
const linesAnimation = keyframes`
    0%, 30% {
        opacity: 0;
        transform: scaleY(0.7) translateX(0);
    }
    35%, 65% {
        opacity: 1;
    }
    70% {
        opacity: 0;
    }
    100% {
        transform: scaleY(0.7) translateX(-400px);
    }
`;

// Keyframes para a animação da luz
const lightAnimation = keyframes`
    0%, 30% {
        opacity: 0;
        transform: perspective(2px) rotateY(-15deg) scaleX(0.88);
    }
    40%, 100% {
        opacity: 1;
        transform: perspective(2px) rotateY(-15deg) scaleX(0.94);
    }
`;

// Keyframes para a animação da primeira porta
const door1Animation = keyframes`
    30%, 50% {
        transform: rotate(32deg);
    }
`;

// Keyframes para a animação da segunda porta
const door2Animation = keyframes`
    30%, 50% {
        transform: rotate(-32deg);
    }
`;

// Keyframes para a animação da caixa
const boxAnimation = keyframes`
    8%, 10% {
        transform: translateX(40px);
        opacity: 1;
    }
    25% {
        transform: translateX(112px);
        opacity: 1;
    }
    26% {
        transform: translateX(112px);
        opacity: 0;
    }
    27%, 100% {
        transform: translateX(0px);
        opacity: 0;
    }
`;

export {
  truckAnimation,
  linesAnimation,
  lightAnimation,
  door1Animation,
  door2Animation,
  boxAnimation,
};

const AnimatedButtonStyled = styled.button`
  appearance: none;
  border: 0;
  background: var(--dark);
  position: relative;
  height: 63px;
  width: 240px;
  padding: 0;
  outline: none;
  cursor: pointer;
  border-radius: 32px;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  transition: transform 0.3s ease;

  &.animate {
    animation: ${truckAnimation} 1s ease-in-out infinite;
  }

  span {
    --o: 1;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 19px;
    line-height: 24px;
    color: var(--white);
    font-size: 16px;
    font-weight: 500;
    opacity: var(--o);
    transition: opacity 0.3s ease;

    &.default {
      transition-delay: 0.3s;
    }

    &.success {
      --offset: 16px;
    }
  }

  span.success svg {
    width: 12px;
    height: 10px;
    display: inline-block;
    vertical-align: top;
    fill: none;
    margin: 7px 0 0 4px;
    stroke: var(--green);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: var(--offset);
    transition: stroke-dashoffset 0.3s ease;
  }

  &:active {
    transform: scale(0.96);
  }
`;

const AnimatedButton = () => {
  const [isAnimated, setIsAnimated] = useState(false);
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
    <AnimatedButtonStyled
      className={`order ${isAnimated ? "animate" : ""}`}
      onClick={handleButtonClick}
    >
      <span className="default">Complete Order</span>
      <span className="success">
        Order Placed
        <svg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
    </AnimatedButtonStyled>
  );
};

export default AnimatedButton;
