import type { Movement } from "./Movement.js";

export class LeftMovement implements Movement {
  constructor(
    public x: number,
    public y: number,
    public speed: number
  ) {}

  update(deltaTime: number): void {
    this.x -= deltaTime * this.speed;
  }
}
