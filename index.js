let beginGame = false;
const beginGameEl = document.getElementById("begin_game");

const ticTacToeGridEl = [
  [
    document.getElementById("11"),
    document.getElementById("12"),
    document.getElementById("13"),
  ],
  [
    document.getElementById("21"),
    document.getElementById("22"),
    document.getElementById("23"),
  ],
  [
    document.getElementById("31"),
    document.getElementById("32"),
    document.getElementById("33"),
  ],
];

function iterateMatrix() {
  for (let i = 0; i < ticTacToeGridEl.length; i++) {
    for (let j = 0; j < ticTacToeGridEl[i].length; j++) {
      console.log(ticTacToeGridEl[i][j]);
    }
  }
}

function startGame() {
  console.log("game started");

  beginGameEl.innerHTML = "End";

  iterateMatrix();
}

function endGame() {
  console.log("game ended");

  beginGameEl.innerHTML = "Begin";
}

beginGameEl.addEventListener("click", function () {
  beginGame = !beginGame;

  if (beginGame) {
    startGame();
  } else {
    endGame();
  }
});
