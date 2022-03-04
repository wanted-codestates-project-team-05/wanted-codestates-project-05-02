import './reset.css';
import theme from './theme';
import React from 'react';
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
