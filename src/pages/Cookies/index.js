import React, { useContext, useEffect, useState } from "react";

import {
  Card,
  CardCartButton,
  CardImage,
  CardInfo,
  CardPrice,
  CardRef,
  CardTitle,
  Wrapper,
  Container,
  Item,
} from "./Cookies.js";

import cookies from "../../db/cookiesdb.json";
import { FaShoppingCart } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../components/CartContext/index.js";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [selectedCookie, setSelectedCookie] = useState(null);

  const { addToCart } = useContext(CartContext);

  const handleCardClick = (event, product) => {
    event.stopPropagation();
    alert(
      "🍪 " +
        product.description +
        " 🍪 Clique no 🛒 carrinho 🛒 para adicionar."
    );
    setSelectedCookie(product);
  };

  return (
    <Wrapper>
      <div className="animation" data-aos="fade-up">
        <Container>
          {cookies.cookies.map((product) => (
            <Item
              key={product.id}
              onClick={(event) => handleCardClick(event, product)}
            >
              <Card>
                <CardImage src={product.image_url} alt={product.name} />
                <CardInfo>
                  <CardTitle>{product.name}</CardTitle>
                  <CardPrice>{`R$ ${product.price.toFixed(2)}`}</CardPrice>
                  <CardRef>{`Ref: ${product.reference}`}</CardRef>
                </CardInfo>
                <CardCartButton>
                  <FaShoppingCart
                    onClick={(event) => {
                      event.stopPropagation();
                      addToCart(product);
                    }}
                  />
                </CardCartButton>
              </Card>
            </Item>
          ))}
        </Container>
      </div>
    </Wrapper>
  );
}
