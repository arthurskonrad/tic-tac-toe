export interface GameInterface {
  startGame: () => void;
  changePlayerTurn: () => void;
  choosePosition: () => void;
  isThereAWinner: () => void;
  endGame: () => void;
}
