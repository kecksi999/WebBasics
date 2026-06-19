import type { Observer } from "./Observer.ts";

export class ForecastDisplay implements Observer {
  update(temperature: number): void {
    console.log("Forecast:", temperature);
  }
}