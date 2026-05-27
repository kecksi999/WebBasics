import { Actor } from "./Actor.js";
import { RightMovement } from "./RightMovement.js";
import { LeftMovement } from "./LeftMovement.js";
export class Circle extends Actor {
    constructor(x, y, radius, speed = 120, direction = "right") {
        super(direction === "right"
            ? new RightMovement(x, y, speed)
            : new LeftMovement(x, y, speed));
        this.radius = radius;
    }
    render(ctx) {
        ctx.fillStyle = "#ff6666";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    getLeft() {
        return this.x - this.radius;
    }
    getRight() {
        return this.x + this.radius;
    }
}
