import { Game } from "./components/Game";

function App() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center">
      <h1>TicTacToe!</h1>
      <Game />
    </main>
  );
}

export default App;
