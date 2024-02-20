import "./App.css";
import { Game } from "./components/Game";

function App() {
  return (
    <>
      <div className="card">
        <h1>TicTacToe!</h1>

        <Game />
      </div>
    </>
  );
}

export default App;
