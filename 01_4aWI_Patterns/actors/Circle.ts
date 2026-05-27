import { Actor } from "./Actor.js";
import type { Movement } from "./Movement.js";
import { RightMovement } from "./RightMovement.js";
import { LeftMovement } from "./LeftMovement.js";

export class Circle extends Actor {
  constructor(
    x: number,
    y: number,
    public radius: number,
    speed: number = 120,
    direction: "left" | "right" = "right"
  ) {
    super(
      direction === "right"
      ? new RightMovement(x, y, speed)
      : new LeftMovement(x, y, speed)
    );
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#ff6666";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  getLeft(): number {
    return this.x - this.radius;
  }

  getRight(): number {
    return this.x + this.radius;
  }
}
