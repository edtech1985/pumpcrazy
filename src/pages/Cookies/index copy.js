import React, { useContext, useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  useSpringRef,
} from "@react-spring/web";

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
  TextOverlay,
} from "./Cookies.js";

import cookies from "../../db/cookiesdb.json";
import { FaShoppingCart } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../components/CartContext/index.js";

export default function App() {
  const [open, setOpen] = useState(false);
  const [showTextOverlay, setShowTextOverlay] = useState(true);
  const [selectedCookie, setSelectedCookie] = useState(null);

  const { addToCart } = useContext(CartContext);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "80%",
      color: "white",
    },
    to: {
      size: open ? "80%" : "50%",
      color: open ? "black" : "white",
    },
  });

  const backgroundImage = open
    ? "rgbargba(64, 41, 21, 0.8)"
    : "url(https://github.com/edtech1985/pumpCrazyCookies/blob/main/cardapio.png?raw=true) center/contain";

  const backgroundSize = open ? "auto" : "100%";
  const backgroundRepeat = "no-repeat";

  const transApi = useSpringRef();
  const transition = useTransition(open ? cookies.cookies : [], {
    ref: transApi,
    trail: 100 / cookies.cookies.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 1 : 0.25,
  ]);

  const handleContainerClick = () => {
    setOpen((prevOpen) => !prevOpen);
    setShowTextOverlay(open);
    setSelectedCookie(null);
  };

  const handleCardClick = (event, product) => {
    event.stopPropagation();
    alert(product.description + ". Clique no carrinho para adicionar.");
    setSelectedCookie(product);
  };

  return (
    <Wrapper>
      <Container
        style={{
          ...rest,
          width: size,
          height: 400,
          background: backgroundImage,
          backgroundSize: backgroundSize,
          backgroundRepeat: backgroundRepeat,
        }}
        className={open ? "textBackground" : ""}
        onClick={handleContainerClick}
      >
        {transition((style, product) => (
          <Item
            key={product.id}
            style={{ ...style }}
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
        {showTextOverlay && (
          <TextOverlay>
            {selectedCookie ? (
              <>
                <span>🍪 </span>
                <br />
                {selectedCookie.description}
              </>
            ) : (
              <>
                <span>🍪 </span>
                <br />
                Clique e descubra uma <b>explosão de sabores</b>!!
              </>
            )}
          </TextOverlay>
        )}
      </Container>
    </Wrapper>
  );
}
