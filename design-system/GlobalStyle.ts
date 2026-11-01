'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${(p) => p.theme.font.family};
    background: ${(p) => p.theme.color.bg};
    color: ${(p) => p.theme.color.text};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  a {
    color: ${(p) => p.theme.color.primary};
  }
`;

export default GlobalStyle;
