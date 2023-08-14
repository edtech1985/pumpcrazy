import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #F2DCB3;

    @media only screen and (max-width: 600px) {
    height: auto;
  }
}

:root {
  --dark-brown: #402915;
  --light-brown: #A6785D;
  --dark-beige: #D9B384;
  --light-beige: #F2DCB3;
  --salmon: #F0D9CA;

  --primary: #275EFE;
  --primary-light: #7699FF;
  --dark: #1C212E;
  --grey-dark: #3F4656;
  --grey: #6C7486;
  --grey-light: #CDD9ED;
  --white: #FFF;
  --green: #16BF78;
  --sand: #DCB773;
  --sand-light: #EDD9A9;
}

`;

export default GlobalStyle;
