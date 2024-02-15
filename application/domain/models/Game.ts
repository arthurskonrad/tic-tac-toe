import type { Player } from "./Player";
import type { GameInterface } from "../entities/GameInterface";

type GameType = {
  players: Player[];
};

export class Game implements GameInterface {
  // estado do jogo, andamento, preparado, finalizado...
  // current player
  public player1: Player;
  public player2: Player;

  // Setup do jogo
  constructor(params: GameType) {
    this.player1 = params.players[0];
    this.player2 = params.players[1];
  }

  startGame() {
    console.log("Game Started");
  }

  changePlayerTurn() {
    console.log("Game Changed Player Turn");
  }

  choosePosition() {
    console.log("Game Choose Position");
  }

  isThereAWinner() {
    console.log("Game Verified if is there a Winner");
  }

  endGame() {
    console.log("Game Ended");
  }
}
