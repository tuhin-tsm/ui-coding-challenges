import React, { useState, useRef, useEffect } from "react";
import styles from "./Popover.module.css";

type Props = {
  content: React.ReactNode;
  children: React.ReactNode;
};

const Popover = ({ content, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["popover-container"]} ref={popoverRef}>
      <div onClick={togglePopover} className={styles["popover-trigger"]}>
        {children}
      </div>
      {isVisible && (
        <div className={styles["popover-content"]}>
          <button className={styles["popover-close"]} onClick={togglePopover}>
            ×
          </button>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
