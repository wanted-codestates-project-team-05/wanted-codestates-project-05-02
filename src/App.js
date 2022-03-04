import theme from './theme';
import React from 'react';
import './reset.css';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
