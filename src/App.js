import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SetupGame = ({setCurrentGame}) => {
  
  const nav = useNavigate();
  
  const startGame = () => {

    setCurrentGame({
      expansions: ["Santa"]
      , players: ["Me", "Jack"]
      , start: new Date().toLocaleString()
    });

    nav("/play");
  };

  return (
    <>
      <h2>
        Setup Game
      </h2>
      <Button
          variant="outlined"
          onClick={startGame}
      >
          Start Game
      </Button>
    </>
  );
};

const PlayGame = ({currentGame, addGameResult}) => {
  const nav = useNavigate();
  
  const endGame = () => {

    addGameResult({
      start: currentGame.start
      , end: new Date().toLocaleString()
    });

    nav("/");
  };

  return (
    <>
      <h2>
        Play Game
      </h2>
      <p>
        Started at {currentGame.start}
      </p>
      <p>
        Players
        <ul>
          {currentGame.players.map(x => <li>{x}</li>)}
        </ul>
      </p>
      <Button
          variant="outlined"
          onClick={endGame}
      >
          Done
      </Button>
    </>
  );
};

function App() {

  const [gameResults, setGameResults] = useState([]);

  const [currentGame, setCurrentGame] = useState({
    expansions: []
    , players: []
    , start: ""
  });

  return (
    <div className="App">
      <Routes>
        <Route 
          path="play" 
          element={
            <PlayGame 
              addGameResult={(newResult) => setGameResults([...gameResults, newResult])} 
              currentGame={currentGame} 
            />
          } 
        />
        <Route 
          path="setup" 
          element={
            <SetupGame 
              setCurrentGame={setCurrentGame}
            />
          } 
        />
        <Route 
          path="/" 
          element={
            <Home 
              gameResults={gameResults}
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
