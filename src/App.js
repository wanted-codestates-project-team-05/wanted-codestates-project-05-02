import './reset.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes />
        <UserInfoPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
