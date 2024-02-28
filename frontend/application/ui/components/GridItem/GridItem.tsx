import type { Position } from "../../features/Game";

type Props = {
  position: Position;
  onClick?: (position: Position) => void;
};

export function GridItem({ position, onClick }: Props) {
  return (
    <div
      onClick={onClick ? () => onClick(position) : undefined}
      className="border h-[50px] w-[50px] cursor-pointer flex items-center justify-center text-4xl uppercase"
    >
      {position.character}
    </div>
  );
}
