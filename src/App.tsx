import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
