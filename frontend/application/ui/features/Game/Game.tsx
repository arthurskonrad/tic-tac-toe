import { useState } from "react";
import { Grid } from "../../components/Grid";
import { GridItem } from "../../components/GridItem";

export type Position = {
  id: number;
  x: number;
  y: number;
  character: string;
};

export function Game() {
  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);
  const [positions, setPositions] = useState<Position[]>();

  const newGame = function () {
    setIsGameRunning(true);

    setPositions([
      { id: 1, x: 0, y: 0, character: "" },
      { id: 2, x: 0, y: 1, character: "" },
      { id: 3, x: 0, y: 2, character: "" },
      { id: 4, x: 1, y: 0, character: "" },
      { id: 5, x: 1, y: 1, character: "" },
      { id: 6, x: 1, y: 2, character: "" },
      { id: 7, x: 2, y: 0, character: "" },
      { id: 8, x: 2, y: 1, character: "" },
      { id: 9, x: 2, y: 2, character: "" },
    ]);
  };

  const endGame = function () {
    setIsGameRunning(false);
    setPositions([]);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {!isGameRunning && (
        <button
          onClick={newGame}
          className="bg-fuchsia-400 rounded p-2 hover:bg-fuchsia-300 text-white font-bold uppercase"
        >
          Novo jogo
        </button>
      )}

      {isGameRunning && (
        <>
          <button
            onClick={endGame}
            className="bg-fuchsia-400 rounded p-2 hover:bg-fuchsia-300 text-white font-bold uppercase"
          >
            Encerrar jogo
          </button>

          <Grid>
            {positions?.map((position) => (
              <GridItem key={position.id} position={position} />
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}
