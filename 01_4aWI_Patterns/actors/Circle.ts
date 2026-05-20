import type { Actor } from "./Actor.js";
import type { Movement } from "./Movement.js";
import { RightMovement } from "./RightMovement.js";
import { LeftMovement } from "./LeftMovement.js";

export class Circle implements Actor {
  public movement: Movement;

  constructor(
    x: number,
    y: number,
    public radius: number,
    speed: number = 120,
    direction: "left" | "right" = "right"
  ) {
    this.movement = direction === "right" 
      ? new RightMovement(x, y, speed)
      : new LeftMovement(x, y, speed);
  }

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

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#ff6666";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime);
  }

  getLeft(): number {
    return this.x - this.radius;
  }

  getRight(): number {
    return this.x + this.radius;
  }
}
