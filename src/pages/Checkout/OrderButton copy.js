import { useState } from "react";
import { AnimatedOrderButton, OrderSpan, OrderSvg } from "./StyledOrderButton";

function AnimatedOrder() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10000);
    }
  };

  return (
    <AnimatedOrderButton
      className={isAnimating ? "animate" : ""}
      onClick={handleButtonClick}
    >
      <OrderSpan className="default">Complete Order</OrderSpan>
      <OrderSpan className="success">
        Order Placed
        <OrderSvg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </OrderSvg>
      </OrderSpan>
    </AnimatedOrderButton>
  );
}

export default AnimatedOrder;
