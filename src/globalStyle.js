import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: ${(p) => p.theme.font};
    src: url("https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap")
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  input, button {
    outline: none;
  }
  
  button {
    cursor: pointer;
  }
  
  html, body, #root {
    min-height: 100%;
  }
  
`;
