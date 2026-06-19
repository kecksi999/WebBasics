import type { Observer } from "./Observer.ts";

export class StatisticsDisplay implements Observer {
  update(temperature: number): void {
    console.log("Statistics:", temperature);
  }
}