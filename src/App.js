import './App.css';

import Sprout from './sprout.png';
import React, { useState } from 'react';

function App() {

  const [isHidden, setHidden] = useState(false);

  function startGame(){
    setHidden(true);
  }

  return (
    <div className="App">
      <div className="Main">
        <p> Skibidi Slicers Simulator </p>
        <img src={Sprout}></img>
        <div className={`Button ${isHidden ? 'hidden' : ''}`} id='startButton' onClick={startGame}>Vent</div>
      </div>
    </div>
  );
}

export default App;
