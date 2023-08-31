import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background: var(--light-beige); // pagina inicial
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media only screen and (max-width: 600px) {
    height: 77vh;
    padding-top: 0rem;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    padding-top: 0rem;
  }
`;

export const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(20vw, 1fr));
  grid-gap: 1vw;
  padding: 1vw;
  cursor: pointer;
  box-shadow: 0px 15px 10px -5px rgba(64, 41, 21, 0.8);
  will-change: width, height;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(3, minmax(30vw, 1fr));
    grid-template-rows: repeat(4, minmax(0.5rem, 1fr));
    padding: 0 1rem;
    margin: 0;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    padding: 1vw;
    padding: 1vw;
  }
`;

export const Item = styled(animated.div)`
  width: ${(props) => (props.open ? "100vw" : "23vw")};
  height: ${(props) => (props.open ? "90vh" : "100%")};
  border-radius: 1.5vw;
  background: var(--light-beige);
  will-change: transform, opacity;

  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.open ? "100vw" : "28vw")};
    height: ${(props) => (props.open ? "50vh" : "30%")};
    border-radius: 1.5vw;
    background: var(--light-beige);
    will-change: transform, opacity;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    width: ${(props) => (props.open ? "100vw" : "23vw")};
    height: ${(props) => (props.open ? "100vh" : "75%")};
    border-radius: 1.5vw;
    background: var(--light-beige);
    will-change: transform, opacity;
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1.5vw;

  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    height: 100%;
  }
`;

export const CardImage = styled.img`
  width: 100%; //tamanho da imagem dentro do card
  height: auto;
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(64, 41, 21, 0.7);
  color: #fff;
  padding: 1vw;
  &:hover {
    background-color: var(--dark-brown);
    // color: var(--dark-brown);
  }

  @media only screen and (max-width: 600px) {
    padding: 2vw;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

export const CardPrice = styled.p`
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 0.35rem;
  }
`;

export const CardRef = styled.p`
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 0.25rem;
  }
`;

export const CardCartButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.75vw;
  margin: 0.75vw;
  background-color: var(--light-brown);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.5s ease-out;
  &:hover {
    // background-color: var(--dark-brown);
    color: var(--dark-brown);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0.2rem;
    padding-top: 0.25rem;
    margin: 0.25rem;
  }
`;

export const ClickText = styled.div`
  background-color: white;
  color: var(--dark-brown);
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 1.5vw;
  width: 20vw;
  transform: translate(-50%, -50%);
  padding: 5vw; // tamanho sombra do box atrás do texto
  background-color: rgba(64, 41, 21, 0.8);
  color: white;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    width: 55vw;
    padding: 10vw; // tamanho sombra do box atrás do texto
  }
`;
