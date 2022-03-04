import './reset.css';
import Routes from './Routes';
import { Header } from './components/common/Header';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import CheerChat from './components/userInfoPage/CheerChat';
import NetworkRequest from './Reducer/NetworkRequest';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes />
        <CheerChat />
        <NetworkRequest />
      </div>
    </ThemeProvider>
  );
}

export default App;
