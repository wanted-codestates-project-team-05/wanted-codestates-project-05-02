import './reset.css';
import Routes from './Routes';
import { Header } from './components/common/Header';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import CheerChat from './components/userInfoPage/CheerChat';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes />
        <CheerChat />
      </div>
    </ThemeProvider>
  );
}

export default App;
