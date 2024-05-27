// src/components/Square.js
import React from 'react';

function Square({ value, onClick }) {
  // Determine the background color based on the value
  let bgColor = 'bg-white'; // Default background color
  if (value === 'X') {
    bgColor = 'bg-green-300'; // Green for X
  } else if (value === 'O') {
    bgColor = 'bg-pink-300'; // Pink for O
  }

  return (
    <button
      className={`w-16 h-16 border border-gray-400 text-2xl font-bold flex items-center justify-center hover:bg-gray-200 ${bgColor}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
