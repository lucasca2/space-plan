import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  
  html,body {
    min-height: 100%;
  }
  
  html {
    font-size: 14px;
    color: ${(p) => p.theme.colors.text};
    background: ${(p) => p.theme.colors.background};
    font-family: ${(p) => p.theme.fontFamily};
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  button {
    font-family: ${(p) => p.theme.fontFamily};
    font-weight: 500;
    cursor: pointer;
  }
  
  h1,h2,h3,h4,h5,h6 {
    color: ${(p) => p.theme.colors.title};
    font-weight: 600;
  }
  
  strong {
    color: ${(p) => p.theme.colors.title};
    font-weight: 500;
  }
`;
