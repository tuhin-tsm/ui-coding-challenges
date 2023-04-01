import { Center } from "@/src/components/Center";
import { useState } from "react";
import { StarRating } from "./StarRating";

export function StarRatingMain() {
  const [value, setValue] = useState(0);

  const handleOnChange = (nextValue: number) => {};

  return (
    <Center>
      <StarRating onChange={handleOnChange} value={value} />
    </Center>
  );
}
