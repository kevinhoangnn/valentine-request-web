import './App.css';
import React, { useState } from 'react';
import 'animate.css'


function App() {
  const no_array = ["NO", "ARE YOU SURE?", "POSITIVE?", "LAST CHANCE.", "DOUBLE CHECKING...", "PICK YES", "REALLY LAST CHANCE!"];
  const [noButtonText, setNoButtonText] = useState(no_array[0]);
  const [yesButtonSize, setYesButtonSize] = useState(14);
  const [giphy, setGiphy] = useState('https://giphy.com/embed/26BRv0ThflsHCqDrG');
  const [showButtons, setShowButtons] = useState(true);

  const handleNoClick = () => {
    try {
      const index = no_array.indexOf(noButtonText);
      setNoButtonText(no_array[index + 1]);
      setYesButtonSize(prevSize => prevSize + 10);
    }
    catch (e) {
      console.log(e);
    }
  };

  const handleYesClick = () => {
    setGiphy('https://giphy.com/embed/y44V691pky7azZOzKQ');
    setShowButtons(false);
  };

  return (
    <div className="App">
      <h> from kevin </h>
      <header className="App-header">
        <iframe src={giphy} width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        {showButtons ?
        <p>
          Be My Valentine?
        </p> :
        <p class="animate__animated animate__heartBeat animate__infinite">
          YAY
        </p>
        }
        <div className="button-container">
          {showButtons && 
            <button className="button-yes" style={{ fontSize: `${yesButtonSize}px`}} role="button" onClick={handleYesClick}>YES</button>}
          {showButtons && noButtonText && 
            <button className="button-no" role="button" onClick={handleNoClick}>{noButtonText}</button>}
        </div>
      </header>
    </div>
  );
}

export default App;
