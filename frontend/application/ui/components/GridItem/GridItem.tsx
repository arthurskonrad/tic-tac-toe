import type { Position } from "../Game";

type Props = {
  position: Position;
};

export function GridItem({ position }: Props) {
  return (
    <div className="border h-[50px] w-[50px] cursor-pointer flex items-center justify-center text-4xl uppercase">
      {position.character}
    </div>
  );
}
