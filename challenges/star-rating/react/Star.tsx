import styles from "./StarRating.module.css";

type Props = {
  rating: number;
  value: 0 | 0.5 | 1;
  onClick: (rating: number) => void;
  onMouseEnter: (rating: number) => void;
  onMouseLeave: () => void;
};

export function Star({
  rating,
  onClick,
  onMouseEnter,
  onMouseLeave,
  value = 0,
}: Props) {
  const style: any = {};
  if (value === 0.5) {
    style.clipPath = "polygon(0 0, 50% 0, 50% 100%, 0 100%)";
  }

  return (
    <div
      className={styles.star}
      style={style}
      onClick={() => onClick(rating)}
      onMouseEnter={() => onMouseEnter(rating)}
      onMouseLeave={onMouseLeave}
    >
      <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="StarIcon"
        fill={value === 0 ? "gray" : "orange"}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      </svg>
    </div>
  );
}
