import styles from "./TicTacToe.module.css";

export function Square({ value, handleClick }) {
  return (
    <button
      className={styles.square}
      onClick={() => handleClick(value)}
      disabled={value !== null}
    >
      {value}
    </button>
  );
}
