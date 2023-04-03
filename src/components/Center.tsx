import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Center(props: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "30vh",
        flexDirection: "column",
      }}
    >
      {props.children}
    </div>
  );
}
