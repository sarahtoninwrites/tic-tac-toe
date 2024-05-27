// src/utils/minimax.js
function minimax(squares, depth, isMaximizing, alpha, beta) {
  const winner = calculateWinner(squares);
  if (winner === 'X') return -10 + depth;
  if (winner === 'O') return 10 - depth;
  if (!squares.includes(null)) return 0;

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = 'O';
        const evalResult = minimax(squares, depth + 1, false, alpha, beta);
        squares[i] = null;
        maxEval = Math.max(maxEval, evalResult);
        alpha = Math.max(alpha, evalResult);
        if (beta <= alpha) break;
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = 'X';
        const evalResult = minimax(squares, depth + 1, true, alpha, beta);
        squares[i] = null;
        minEval = Math.min(minEval, evalResult);
        beta = Math.min(beta, evalResult);
        if (beta <= alpha) break;
      }
    }
    return minEval;
  }
}

export function findBestMove(squares) {
  let bestMove = -1;
  let bestValue = -Infinity;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      squares[i] = 'O';
      const moveValue = minimax(squares, 0, false, -Infinity, Infinity);
      squares[i] = null;
      if (moveValue > bestValue) {
        bestMove = i;
        bestValue = moveValue;
      }
    }
  }
  return bestMove;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
