import { Player } from "./engine/Player";
import { Grid } from "./engine/Grid";
import { isObjectEmpty } from "./helpers/isObjectEmpty";

let isGameRunning = false;
let grid = new Grid();
const toggleGame = document.getElementById("toggle_game");

function start(isGameRunning: boolean) {
  if (isObjectEmpty(grid.eventCallbacks) && isGameRunning) {
    grid.setupTicTacToeGridEl();
  }

  toggleEngine();
}

function toggleEngine() {
  if (isGameRunning) {
    if (toggleGame !== null) {
      toggleGame.innerHTML = "End game";
    }

    // const players = [new Player(), new Player()];
  } else {
    if (toggleGame !== null) {
      toggleGame.innerHTML = "Start new game";
    }

    grid.cleanTicTacToeGridEl();
  }
}

toggleGame?.addEventListener("click", function () {
  isGameRunning = !isGameRunning;

  start(isGameRunning);
});
