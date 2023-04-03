import { useEffect, useState } from "react";
import { getFeedbackText } from "./getFeedbackText";
import { Star } from "./Star";
import styles from "./StarRating.module.css";

type Props = {
  onChange: (value: number) => void;
  value: number;
  precision?: number;
};

export function StarRating({ onChange, value, precision = 1 }: Props) {
  const [localValue, setLocaValue] = useState(0);

  useEffect(() => {
    setLocaValue(value);
  }, [value]);

  const handleOnClick = (nextValue: number) => {
    onChange(nextValue);
  };

  const handleOnMouseEnter = (nextValue: number) => {
    setLocaValue(nextValue);
  };

  const handleOnMouseLeave = () => {
    setLocaValue(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.ratingRoot}>
        <input type="hidden" name="rating" value={value} />
        {[1, 2, 3, 4, 5].map((index) => {
          const starValue = index <= localValue ? 1 : 0;
          return (
            <Star
              key={index}
              rating={index}
              value={starValue}
              onClick={handleOnClick}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          );
        })}
      </div>
      <span className={styles.feedback}>{getFeedbackText(localValue)}</span>
    </div>
  );
}
