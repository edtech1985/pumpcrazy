import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media only screen and (max-width: 600px) {
    padding-top: 0rem;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    padding-top: 0rem;
  }
`;

export const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(20%, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  align-items: center;
  justify-content: space-around;

  margin-right: 1rem;

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
    margin-right: 0rem;
  }

  @media only screen and (min-width: 481px) and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(40%, 1fr));
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    grid-template-columns: repeat(3, minmax(33%, 1fr));

    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const Item = styled(animated.div)`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 20px;

  transition: transform 1s ease-out;

  &:hover {
    transform: scale(1.15);
  }
`;

export const CardImage = styled.img`
  border-radius: 20px;
  width: 100%; //tamanho da imagem dentro do card
  height: auto;
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(64, 41, 21, 0.75);
  border-radius: 20px;

  color: #fff;
  padding: 1vw;
  &:hover {
    background-color: var(--dark-brown);
  }

  @media only screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 1.25rem;
  }
`;

export const CardPrice = styled.p`
  font-size: 1.25rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export const CardRef = styled.p`
  font-size: 0.75rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
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
