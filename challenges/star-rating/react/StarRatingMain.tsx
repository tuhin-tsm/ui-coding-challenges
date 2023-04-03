import { Center } from "@/src/components/Center";
import { HRule } from "@/src/components/HRule";
import { Title } from "@/src/components/Title";
import { useState } from "react";
import { StarRating } from "./StarRating";

export function StarRatingMain() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(4);

  return (
    <Center>
      <StarRating
        onChange={(nextValue: number) => setValue1(nextValue)}
        value={value1}
      />
      <HRule />
      <Title>Initial value: 4</Title>
      <StarRating
        onChange={(nextValue: number) => setValue2(nextValue)}
        value={value2}
      />
    </Center>
  );
}
