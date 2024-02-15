import { useState } from "react";
import { Grid } from "./components/Grid";
import { GridItem } from "./components/GridItem";
import "./App.css";

export type Position = {
  id: number;
  x: number;
  y: number;
  character: string;
};

function App() {
  const [gameIsRunning, setGameIsRunning] = useState<boolean>(false);
  const [positions, setPositions] = useState<Position[]>();

  const newGame = function () {
    setGameIsRunning(!gameIsRunning);

    if (gameIsRunning) {
      setPositions(undefined);
      return;
    }

    setPositions([
      { id: 1, x: 0, y: 0, character: "x" },
      { id: 2, x: 0, y: 1, character: "o" },
      { id: 3, x: 0, y: 2, character: "" },
      { id: 4, x: 1, y: 0, character: "" },
      { id: 5, x: 1, y: 1, character: "" },
      { id: 6, x: 1, y: 2, character: "" },
      { id: 7, x: 2, y: 0, character: "" },
      { id: 8, x: 2, y: 1, character: "" },
      { id: 9, x: 2, y: 2, character: "" },
    ]);
  };

  return (
    <>
      <div className="card">
        <h1>TicTacToe!</h1>
        <button onClick={newGame}>
          {gameIsRunning ? "Apagar Jogo" : "Novo jogo"}
        </button>
        {positions && (
          <Grid>
            {positions?.map((position) => (
              <GridItem key={position.id} position={position} />
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}

export default App;
