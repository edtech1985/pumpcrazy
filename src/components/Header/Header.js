import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  background-color: var(--dark-brown);
  box-shadow: 5px 8px 4px rgba(0, 0, 0, 0.75);
  width: 100vw;
  max-height: 12vh;
  height: 12vh;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  box-sizing: border-box;
`;

export const StyledLogo = styled.img`
  width: 10vh;
  height: 10vh;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavItem = styled.a`
  display: block;
  padding: 1vw;
  color: #fff;
  text-decoration: none;
  font-size: 2vw;
  &:hover {
    color: var(--light-beige);
    border-radius: 10px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const StyledCartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledCart = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const StyledCartIcon = styled.div`
  width: 5vh;
  height: 6vh;
  color: var(--dark-brown);
  background-color: var(--light-beige);
  border-radius: 50%;
  margin-right: 0.75vw;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25vw;
  &:hover {
    color: var(--light-brown);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const StyledCartCount = styled.div`
  margin-left: 0.25vw;
  font-weight: bold;
  font-size: 1.25vw;
  color: var(--dark-brown);
  &:hover {
    color: var(--light-brown);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
