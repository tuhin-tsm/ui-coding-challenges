import styles from "./TicTacToe.module.css";
import { Square } from "./Square";
import { useState } from "react";
import { calculateWinner } from "../calculateWinner";

export function TicTacToeBoard() {
  const [player, setPlayer] = useState("one");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i]) {
      // already marked
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = player === "one" ? "✓" : "X";
    setSquares(nextSquares);
    setPlayer(player === "one" ? "two" : "one");
  };

  const winner = calculateWinner(squares);
  let status;
  if (calculateWinner(squares)) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (player === "one" ? "✓" : "X");
  }

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.board}>
          {[...Array(9).keys()].map((index) => (
            <Square
              key={index}
              handleClick={() => handleClick(index)}
              value={squares[index]}
            />
          ))}
        </div>
      </div>
      <pre>{JSON.stringify(squares)}</pre>
    </div>
  );
}
