// src/App.js
import React from 'react';
import Game from './components/game';

function App() {
  return (
    <div className="App text-center justify-center items-center">
      <h1 class="text-4xl text-center justify-center items-center mt-9 font-serif" >Tic Tac Toe</h1>
      <button class="btn text-center justify-center items-center mt-6"> <a href="index.html">Mode Select</a></button>
      <Game />
      <footer class="text-center justify-center items-center mt-9">
        by <a href="https://github.com/sarahtoninwrites"> <strong>sarahtoninwrites</strong></a>
      
      </footer>
    </div>

  );
}

export default App;
