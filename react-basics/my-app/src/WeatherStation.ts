import type { Observer } from "./Observer.ts";

export class WeatherStation {
  private observers: Observer[] = [];
  private temperature = 0;

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer =>
      observer.update(this.temperature)
    );
  }

  setTemperature(temp: number) {
    this.temperature = temp;
    this.notifyObservers();
  }
}