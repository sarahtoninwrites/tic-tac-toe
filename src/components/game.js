// src/components/Game.js
import React, { useState } from 'react';
import Board from './board';
import ModeSelect from './modeselect';

function Game() {
  const [mode, setMode] = useState(null);

  const handleSelectMode = (selectedMode) => {
    setMode(selectedMode);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {!mode ? (
        <ModeSelect onSelectMode={handleSelectMode} />
      ) : (
        <Board mode={mode} />
      )}
    </div>
  );
}

export default Game;
