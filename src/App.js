import theme from './theme';
import React from 'react';
import './reset.css';
import Routes from './Routes';
import { Header } from './components/common/Header';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
