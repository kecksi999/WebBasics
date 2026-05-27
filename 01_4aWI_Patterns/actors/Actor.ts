import type { Movement } from "./Movement.js";
import type { ActorObserver } from "./ActorObserver.js";

export type BoundarySide = "left" | "right";

export abstract class Actor {
  private observers: ActorObserver[] = [];

  constructor(public movement: Movement) {}

  get x(): number {
    return this.movement.x;
  }

  set x(value: number) {
    this.movement.x = value;
  }

  get y(): number {
    return this.movement.y;
  }

  set y(value: number) {
    this.movement.y = value;
  }

  addObserver(observer: ActorObserver): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  removeObserver(observer: ActorObserver): void {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notifyBoundaryHit(side: BoundarySide): void {
    for (const observer of this.observers) {
      observer.onBoundaryHit(this, side);
    }
  }

  setMovement(movement: Movement): void {
    this.movement = movement;
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime);
  }

  abstract render(ctx: CanvasRenderingContext2D): void;
  abstract getLeft(): number;
  abstract getRight(): number;
}
