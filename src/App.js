import theme from './theme';
import React from 'react';
import './reset.css';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/common/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
