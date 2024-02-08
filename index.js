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

const actionCallbacks = {};

function addEvent({ el, eventType, callback }) {
  const key = `${el.id}-${eventType}`;

  actionCallbacks[key] = callback;

  el.addEventListener(eventType, callback);
}

function removeEvent({ el, eventType }) {
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
        console.log([i, j]);
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
  toggleGame.innerHTML = "End game";

  setupTicTacToeGridEl();
}

function endGame() {
  toggleGame.innerHTML = "Start new game";

  cleanTicTacToeGridEl();
}

toggleGame.addEventListener("click", function () {
  beginGame = !beginGame;

  if (beginGame) {
    startGame();
  } else {
    endGame();
  }
});
