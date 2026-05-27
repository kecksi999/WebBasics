import { Actor } from "./Actor.js";
import type { Movement } from "./Movement.js";
import { RightMovement } from "./RightMovement.js";
import { LeftMovement } from "./LeftMovement.js";

export class Rectangle extends Actor {
  constructor(
    x: number,
    y: number,
    public width: number,
    public height: number,
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
    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  getLeft(): number {
    return this.x;
  }

  getRight(): number {
    return this.x + this.width;
  }

  sayHello(): void {
    console.log("Hello from Rectangle!");
  }
}
