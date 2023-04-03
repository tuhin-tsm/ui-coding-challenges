import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Title(props: Props) {
  return <h3 style={{ color: "#111827" }}>{props.children}</h3>;
}
