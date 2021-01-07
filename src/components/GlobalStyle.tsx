import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
      text-decoration: none;
  }
  * {
    box-sizing : border-box;
  }
  body {
    padding : 0;
    margin : 0;
    font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;