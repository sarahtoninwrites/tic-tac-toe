// src/components/ModeSelect.js
import React from 'react';

function ModeSelect({ onSelectMode }) {
  return (
    <div className="flex flex-col items-center mt-8">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => onSelectMode('multiplayer')}
      >
        Multiplayer
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        onClick={() => onSelectMode('computer')}
      >
        Play Against Computer
      </button>
    </div>
  );
}

export default ModeSelect;
