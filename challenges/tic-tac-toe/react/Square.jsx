import styles from "./TicTacToe.module.css";

export function Square({ value, handleClick }) {
  return (
    <button
      className={`${styles.square} ${
        value === "X" ? styles.cross : styles.tick
      }`}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}
