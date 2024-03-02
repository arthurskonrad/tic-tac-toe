import { useCallback, useEffect, useState } from "react";
import { Grid } from "../../components/Grid";
import { GridItem } from "../../components/GridItem";

export type Position = {
  id: number;
  character: string;
};

const initialPositions: Position[] = [
  { id: 1, character: "" },
  { id: 2, character: "" },
  { id: 3, character: "" },
  { id: 4, character: "" },
  { id: 5, character: "" },
  { id: 6, character: "" },
  { id: 7, character: "" },
  { id: 8, character: "" },
  { id: 9, character: "" },
];

const winningPositions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

export function Game() {
  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);
  const [positionsSkeleton, setPositionSkeleton] =
    useState<Position[]>(initialPositions);
  const [positions, setPositions] = useState<Position[]>(positionsSkeleton);
  const [score, setScore] = useState<Position[][]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<string>("o");

  const newGame = function () {
    setIsGameRunning(true);
  };

  const endGame = useCallback(() => {
    if (!positions) {
      return;
    }

    setScore([...score, positions]);

    setIsGameRunning(false);
    setPositionSkeleton(positions ? positions : []);
    setPositions(initialPositions);
    setCurrentCharacter("o");
  }, [positions, score, setPositionSkeleton, setPositions, setIsGameRunning]);

  const handleClick = function (position: Position) {
    if (alreadyPlayed(position)) {
      return;
    }

    const newPositions = positions?.map((p) => {
      if (p.id === position.id) {
        return { ...p, character: currentCharacter };
      }

      return p;
    });

    setCurrentCharacter(currentCharacter === "o" ? "x" : "o");
    setPositions(newPositions);
  };

  const alreadyPlayed = function (position: Position) {
    return position.character !== "";
  }

  const validateWinner = function (positions: Position[] | undefined) {
    if (!positions) {
      return false;
    }

    return winningPositions.some((winningSequence) => {
      const [a, b, c] = winningSequence;

      const aCharacter = positions[a - 1].character;
      const bCharacter = positions[b - 1].character;
      const cCharacter = positions[c - 1].character;

      return (
        aCharacter && aCharacter === bCharacter && aCharacter === cCharacter
      );
    });
  };

  const validateTie = function (positions: Position[] | undefined) {
    if (!positions) {
      return false;
    }

    return positions.every((position) => position.character !== "");
  }

  useEffect(() => {
    if (validateWinner(positions) || validateTie(positions)) {
      endGame();
    }
  }, [positions, endGame]);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {!isGameRunning && (
        <>
          <button onClick={newGame}>Novo jogo</button>

          {score.length > 0 && (
            <Grid>
              {positionsSkeleton?.map((position) => (
                <GridItem key={position.id} position={position} />
              ))}
            </Grid>
          )}
        </>
      )}

      {isGameRunning && (
        <>
          <button onClick={endGame}>Encerrar jogo</button>

          <Grid>
            {positions?.map((position) => (
              <GridItem
                key={position.id}
                position={position}
                onClick={handleClick}
              />
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}
