import { PropsWithChildren } from "react";
import "./Grid.css";

type Props = unknown;

export function Grid({ children }: PropsWithChildren<Props>) {
  return <div className="grid">{children}</div>;
}
