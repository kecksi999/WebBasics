import { Actor } from "./Actor.js";
import { RightMovement } from "./RightMovement.js";
import { LeftMovement } from "./LeftMovement.js";
export class Rectangle extends Actor {
    constructor(x, y, width, height, speed = 120, direction = "right") {
        super(direction === "right"
            ? new RightMovement(x, y, speed)
            : new LeftMovement(x, y, speed));
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
