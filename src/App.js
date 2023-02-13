import React, {useState} from 'react';
import LandingPage from './components/LandingPage';
import './App.css';
import GamePage from './components/GamePage';

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {
        !start? <LandingPage setStart={setStart} />: <GamePage />
      }
    </div>
  );
}

export default App;
