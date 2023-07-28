import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    height: 100%;
    max-height: 100%;
  }
`;
