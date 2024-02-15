import type { PlayerInterface } from "../entities/PlayerInteface";

type PlayerParamsType = {
  name: string;
  isFirst: boolean;
  character: string;
  active: boolean;
};

export class Player implements PlayerInterface {
  public name: string;
  public character: string;
  public active: boolean;
  public score: number;

  constructor(params: PlayerParamsType) {
    this.name = params.name;
    this.character = params.character;
    this.active = params.isFirst;
    this.score = 1;
  }

  onClick() {
    console.log("Clicked!");
  }
}
