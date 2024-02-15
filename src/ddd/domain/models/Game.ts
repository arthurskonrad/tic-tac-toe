import { Player } from './Player'
import type { GameInterface } from '../entities/GameInterface'

type GameType = {
  players: Player[]
}

export class Game implements GameInterface {
  public player1: Player
  public player2: Player

  constructor(params: GameType) {
    this.player1 = params.players[0]
    this.player2 = params.players[1]
  }

  startGame() {
    console.log('Game Started')
  }

  changePlayerTurn() {
    console.log('Game Changed Player Turn')
  }

  choosePosition() {
    console.log('Game Choose Position')
  }

  isThereAWinner() {
    console.log('Game Verified if is there a Winner')
  }

  endGame() {
    console.log('Game Ended')
  }
}
