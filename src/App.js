import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Home } from './Home';

const SetupGame = () => <h2>Setup Game</h2>;
const PlayGame = () => <h2>Play Game</h2>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="play" element={<PlayGame />} />
        <Route path="setup" element={<SetupGame />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
