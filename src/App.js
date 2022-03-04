import './reset.css';
import Routes from './Routes';
import { Header } from './components/common/Header';
import RadialChart from './components/chart/RadialChart';
import HomePage from './pages/HomePage';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import CheerChat from './components/userInfoPage/CheerChat';
import NetworkRequest from './Reducer/NetworkRequest';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*<Header />*/}
        {/*<Routes />*/}
        <CheerChat />
        <NetworkRequest />
      </div>
    </ThemeProvider>
  );
}

export default App;
