import type { Actor } from "./Actor.js";
import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";
import { SuperCircle } from "./SuperCircle.js";

export class ActorFactory {
  private static instance: ActorFactory | null = null;

  private constructor() {}

  static getInstance(): ActorFactory {
    if (this.instance === null) {
      this.instance = new ActorFactory();
    }

    return this.instance;
  }

  createCircle(
    x: number,
    y: number,
    radius: number,
    speed: number = 120,
    direction: "left" | "right" = "right"
  ): Circle {
    return new Circle(x, y, radius, speed, direction);
  }

  createRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    speed: number = 120,
    direction: "left" | "right" = "right"
  ): Rectangle {
    return new Rectangle(x, y, width, height, speed, direction);
  }

  createSuperCircle(
    x: number,
    y: number,
    radius: number,
    speed: number = 50
  ): SuperCircle {
    return new SuperCircle(x, y, radius, speed);
  }

  createDemoActors(): Actor[] {
    return [
      this.createCircle(80, 80, 25, 150, "right"),
      this.createRectangle(220, 170, 90, 50, 120, "right"),
      this.createCircle(700, 320, 30, 180, "left"),
      this.createRectangle(620, 450, 70, 70, 100, "left"),
      this.createSuperCircle(350, 120, 35, 90),
    ];
  }
}