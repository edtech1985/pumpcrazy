import React, { useState } from "react";
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

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const [showTextOverlay, setShowTextOverlay] = useState(true);
  const [selectedCookie, setSelectedCookie] = useState(null);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%",
      color: "white",
    },
    to: {
      size: open ? "100%" : "70%",
      color: open ? "black" : "white",
    },
  });

  const backgroundImage = open
    ? "rgbargba(64, 41, 21, 0.8)"
    : "url(https://github.com/edtech1985/pumpCrazyCookies/blob/main/cardapio.png?raw=true) center/contain";

  const backgroundSize = open ? "auto" : "contain";
  const backgroundRepeat = "space";

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
    setSelectedCookie(null); // Limpar a seleção ao fechar o card
  };

  const handleCardClick = (event, item) => {
    event.stopPropagation();
    alert(item.description + ". Clique no carrinho para adicionar.");
    setSelectedCookie(item); // Definir o cookie selecionado
  };

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (event, item) => {
    event.stopPropagation();
    const existingItem = cartItems.find((i) => i.id === item.id);
    toast.success("Item adicionado ao carrinho");
    if (existingItem) {
      // Update quantity
      const updatedCartItems = cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("CartItems", JSON.stringify(updatedCartItems));
    } else {
      // Add new item with quantity 1
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
      localStorage.setItem(
        "CartItems",
        JSON.stringify([...cartItems, newItem])
      );
    }
  };

  return (
    <Wrapper>
      <Container
        style={{
          ...rest,
          width: size,
          height: size,
          background: backgroundImage,
          backgroundSize: backgroundSize,
          backgroundRepeat: backgroundRepeat,
        }}
        className={open ? "textBackground" : ""}
        onClick={handleContainerClick}
      >
        {transition((style, item) => (
          <Item
            key={item.id}
            style={{ ...style }}
            onClick={(event) => handleCardClick(event, item)}
          >
            <Card>
              <CardImage src={item.image_url} alt={item.name} />
              <CardInfo>
                <CardTitle>{item.name}</CardTitle>
                <CardPrice>{`R$ ${item.price.toFixed(2)}`}</CardPrice>
                <CardRef>{`Ref: ${item.reference}`}</CardRef>
              </CardInfo>
              <CardCartButton onClick={(event) => handleAddToCart(event, item)}>
                <FaShoppingCart />
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
