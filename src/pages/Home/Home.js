import styled from "styled-components";
import backgroundImage from "./backgroundImage";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  min-height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 600px) {
    height: 100%;
    min-height: auto;
  }

  @media only screen and (min-width: 600px) and (max-width: 999px) {
    justify-content: start;
    padding-top: 5vh;
    padding-bottom: 5vh;
    height: auto;
    min-height: auto;
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

  @media only screen and (max-width: 400px) {
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 400px) and (max-width: 600px) {
    height: auto;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    height: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: auto;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 2.25vw;
  margin-top: 1vw;
  margin-bottom: 1.5vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
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
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 1.25rem;
  }
`;

export const MaskDiv = styled.div`
  position: absolute;
  bottom: -8vh;
  left: 5vw;
  width: auto;
  max-height: 20vh;
  z-index: 999;
`;

export const Mask = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: auto;
  max-height: 20vh;
  z-index: 999;

  @media only screen and (max-width: 400px) {
    max-height: 100px;
    bottom: 15px;
    left: -30px;
  }

  @media only screen and (min-width: 400px) and (max-width: 600px) {
    max-height: 16vh;
    bottom: -7vh;
    left: -7vw;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    max-height: 16vh;
    bottom: -7vh;
    left: -4vw;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    max-height: 22vh;
    bottom: -7vh;
    left: 0;
  }
`;
