import React, { useState, ReactNode, KeyboardEvent } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordionHeader}
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`section-content-${title}`}
      >
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div
          id={`section-content-${title}`}
          className={styles.accordionContent}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
