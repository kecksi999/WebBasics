import { RightMovement } from "./RightMovement.js";
import { LeftMovement } from "./LeftMovement.js";

export class Rectangle {
    constructor(x, y, width, height, speed = 120, direction = "right") {
        this.width = width;
        this.height = height;
        this.movement = direction === "right"
            ? new RightMovement(x, y, speed)
            : new LeftMovement(x, y, speed);
    }
    get x() {
        return this.movement.x;
    }
    set x(value) {
        this.movement.x = value;
    }
    get y() {
        return this.movement.y;
    }
    set y(value) {
        this.movement.y = value;
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
    getLeft() {
        return this.x;
    }
    getRight() {
        return this.x + this.width;
    }
    sayHello() {
        console.log("Hello from Rectangle!");
    }
}
