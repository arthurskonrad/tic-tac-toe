import type { Position } from "../../features/Game";

type Props = {
  position: Position;
};

export function GridItem({ position }: Props) {
  return (
    <div className="border border-fuchsia-500 h-[50px] w-[50px] cursor-pointer flex items-center justify-center text-4xl uppercase hover:bg-fuchsia-200">
      {position.character}
    </div>
  );
}
