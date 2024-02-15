import { ReactNode } from "react";
import "./Grid.css";

type Props = {
  children: ReactNode;
};

export function Grid({ children }: Props) {
  return <div className="grid">{children}</div>;
}
