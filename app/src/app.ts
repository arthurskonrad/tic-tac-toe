import { Player } from "./engine/Player";

let beginGame = false;
const toggleGame = document.getElementById("toggle_game");

const ticTacToeGridEl = [
  [
    document.getElementById("00"),
    document.getElementById("01"),
    document.getElementById("02"),
  ],
  [
    document.getElementById("10"),
    document.getElementById("11"),
    document.getElementById("12"),
  ],
  [
    document.getElementById("20"),
    document.getElementById("21"),
    document.getElementById("22"),
  ],
];

const actionCallbacks: any = {};

function addEvent({ el, eventType, callback }: AddEventType) {
  if (!el) return;

  const key = `${el.id}-${eventType}`;

  actionCallbacks[key] = callback;

  el.addEventListener(eventType, callback);
}

function removeEvent({ el, eventType }: RemoveEventType) {
  if (!el) return;

  const key = `${el.id}-${eventType}`;

  if (actionCallbacks[key]) {
    el.removeEventListener(eventType, actionCallbacks[key]);
    delete actionCallbacks[key];
  }
}

function setupTicTacToeGridEl() {
  for (let i = 0; i < ticTacToeGridEl.length; i++) {
    for (let j = 0; j < ticTacToeGridEl[i].length; j++) {
      const currentEl = ticTacToeGridEl[i][j];
      const callback = function () {
        console.log({ position: [i, j], player: 0 });
      };

      addEvent({ el: currentEl, eventType: "click", callback });
    }
  }
}

function cleanTicTacToeGridEl() {
  for (let i = 0; i < ticTacToeGridEl.length; i++) {
    for (let j = 0; j < ticTacToeGridEl[i].length; j++) {
      const currentEl = ticTacToeGridEl[i][j];

      removeEvent({ el: currentEl, eventType: "click" });
    }
  }
}

function startGame() {
  if (toggleGame !== null) {
    toggleGame.innerHTML = "End game";
  }

  const players = [new Player(), new Player()];

  players[0].onClick();

  setupTicTacToeGridEl();
}

function endGame() {
  if (toggleGame !== null) {
    toggleGame.innerHTML = "Start new game";
  }

  cleanTicTacToeGridEl();
}

toggleGame?.addEventListener("click", function () {
  beginGame = !beginGame;

  if (beginGame) {
    startGame();
  } else {
    endGame();
  }
});
