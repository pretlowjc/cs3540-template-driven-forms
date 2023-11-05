import { throttle } from "rxjs";

export class Character {
  public name: string;
  public weapon: string;
  public race: string;
  public background: string;

  constructor(name: string, weapon: string, race: string, background: string) {
    this.name = name;
    this.weapon = weapon;
    this.race = race;
    this.background = background;
  }

}
