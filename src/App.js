import './reset.css';
import Routes from './Routes';
import { Header } from './components/common/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
