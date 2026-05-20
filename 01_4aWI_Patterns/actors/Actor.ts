import type { Movement } from "./Movement.js";

export interface Actor {
  x: number;
  y: number;
  radius?: number;
  width?: number;
  height?: number;
  movement: Movement;
  render(ctx: CanvasRenderingContext2D): void;
  update(deltaTime: number): void;
  getLeft(): number;
  getRight(): number;
}
