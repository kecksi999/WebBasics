import { RightMovement } from "./RightMovement.js";
import { LeftMovement } from "./LeftMovement.js";

export class Circle {
    constructor(x, y, radius, speed = 120, direction = "right") {
        this.radius = radius;
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
        ctx.fillStyle = "#ff6666";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
    getLeft() {
        return this.x - this.radius;
    }
    getRight() {
        return this.x + this.radius;
    }
}
