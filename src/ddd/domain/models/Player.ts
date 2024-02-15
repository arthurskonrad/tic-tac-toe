import type { PlayerInterface } from '../entities/PlayerInteface'

type PlayerParamsType = {
  name: string
  isFirst: boolean
  character: string
}

export class Player implements PlayerInterface {
  public name: string
  public isFirst: boolean
  public character: string
  public score: number

  constructor(params: PlayerParamsType) {
    this.name = params.name
    this.isFirst = params.isFirst
    this.character = params.character
    this.score = 1
  }

  onClick() {
    console.log('Clicked!')
  }
}
