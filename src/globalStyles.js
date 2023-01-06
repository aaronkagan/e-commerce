import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding:0;
    font-family: sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export default GlobalStyle;
