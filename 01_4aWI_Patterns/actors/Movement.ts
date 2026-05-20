export interface Movement {
  x: number;
  y: number;
  speed: number;
  update(deltaTime: number): void;
}