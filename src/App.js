import './reset.css'
import Routes from './Routes';
import { Header } from './components/common/Header';
import ChartLine from './components/userInfoPage/ChartLine';

function App() {
  return (
    <div className="App">
      <Header />
      <ChartLine />
      <Routes/>
    </div>
  );
}

export default App;
