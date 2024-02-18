import type { Position } from "../../App";
import "./GridItem.css";

type Props = {
  position: Position;
};

export function GridItem({ position }: Props) {
  return <div className="grid-item item">{position.character}</div>;
}
