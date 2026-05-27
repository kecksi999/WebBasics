import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";
import { SuperCircle } from "./SuperCircle.js";
export class ActorFactory {
    constructor() { }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new ActorFactory();
        }
        return this.instance;
    }
    createCircle(x, y, radius, speed = 120, direction = "right") {
        return new Circle(x, y, radius, speed, direction);
    }
    createRectangle(x, y, width, height, speed = 120, direction = "right") {
        return new Rectangle(x, y, width, height, speed, direction);
    }
    createSuperCircle(x, y, radius, speed = 50) {
        return new SuperCircle(x, y, radius, speed);
    }
    createDemoActors() {
        return [
            this.createCircle(80, 80, 25, 150, "right"),
            this.createRectangle(220, 170, 90, 50, 120, "right"),
            this.createCircle(700, 320, 30, 180, "left"),
            this.createRectangle(620, 450, 70, 70, 100, "left"),
            this.createSuperCircle(350, 120, 35, 90),
        ];
    }
}
ActorFactory.instance = null;
