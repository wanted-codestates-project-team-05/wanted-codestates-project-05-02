import './reset.css';
import Routes from './Routes';
import { Header } from './components/common/Header';
import RadialChart from './components/chart/RadialChart';
import HomePage from './pages/HomePage';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import CheerChat from './components/UserInfoPage/CheerChat';
import NetworkRequest from './Reducer/NetworkRequest';
import React from 'react';
import RankPage from './pages/RankPage';
import UserInfoPage from './pages/UserInfoPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*<NetworkRequest />*/}
        <UserInfoPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
