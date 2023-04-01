import styles from "./StarRating.module.css";

type Props = {
  onChange: (value: number) => void;
  value: number;
  precision?: number;
};

export function StarRating({ onChange, value, precision = 1 }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.ratingRoot}>
        <input type="hidden" name="rating" value={value} />
        <div
          className={styles.star}
          style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
        >
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="StarIcon"
            fill="orange"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
        </div>
      </div>
      <span className={styles.feedback}>Feedback</span>
    </div>
  );
}
