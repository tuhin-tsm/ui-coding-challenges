import Accordion from "@/challenges/accodion/react/Accordion";
import { Center } from "@/src/components/Center";

export default function Page() {
  return (
    <Center>
      <h1>React Accordion Example</h1>
      <Accordion title="Section 1">
        <p>This is the content of section 1.</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>This is the content of section 2.</p>
      </Accordion>
      <Accordion title="Section 3">
        <p>This is the content of section 3.</p>
      </Accordion>
    </Center>
  );
}
