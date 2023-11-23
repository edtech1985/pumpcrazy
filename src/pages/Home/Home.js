import styled from "styled-components";
import backgroundImage from "./backgroundImage";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 600px) {
    max-height: 100%;
    width: 100%;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.25;
`;

export const StyledContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;

  @media only screen and (max-width: 600px) {
    height: auto;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    height: auto;
    padding-top: 40vh;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: auto;
    padding-top: 30vh;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 2.25vw;
  margin-top: 1vw;
  margin-bottom: 1.5vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: 0.5vw;
    width: 100%;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 2rem;
  }
`;

export const StyledP = styled.p`
  font-size: 1.35vw;
  text-align: center;
  width: 90vw;
  margin-bottom: 1vw;
  position: relative;

  /* Camada de background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(242, 220, 179, 0.5);
    z-index: -1; /* Coloca a camada por trás do texto */
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 1.25rem;
  }
`;
