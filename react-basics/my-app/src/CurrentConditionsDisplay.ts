import type { Observer } from "./Observer.ts";

export class CurrentConditionsDisplay implements Observer {
  update(temperature: number): void {
    console.log("Current:", temperature);
  }
}