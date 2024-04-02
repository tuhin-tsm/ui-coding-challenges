import styles from "./TicTacToe.module.css";
import { TicTacToeBoard } from "./TicTacToeBoard";
import { useState } from "react";

export function TicTacToeGame() {
  const [currentMove, setCurrentMove] = useState(0);
  const player = currentMove % 2 === 0 ? "one" : "two";

  // The history array represents all board states, from the first to the last move, and has a shape like this:
  /*
    [
    // Before first move
    [null, null, null, null, null, null, null, null, null],
    // After first move
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, "X", null, null, null, null],
    // ...
  ];
  */

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[currentMove];

  const handleOnPlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const renderMoves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button className={styles.button} onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <div>
          <TicTacToeBoard
            player={player}
            squares={currentSquares}
            onPlay={handleOnPlay}
          />
        </div>
        <div className={styles.moves}>
          <ol>{renderMoves}</ol>
        </div>
      </div>
      <pre>{JSON.stringify(currentSquares)}</pre>
    </div>
  );
}
