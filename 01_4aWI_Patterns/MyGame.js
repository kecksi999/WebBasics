// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { RightMovement } from "./actors/RightMovement.js";
import { LeftMovement } from "./actors/LeftMovement.js";

class MyGame extends Game {
    constructor(...arguments_) {
        super(...arguments_);
        this.actors = [];
    }
    init() {
        this.actors = [
            new Circle(80, 80, 25, 150, "right"),
            new Rectangle(220, 170, 90, 50, 120, "right"),
            new Circle(700, 320, 30, 180, "left"),
            new Rectangle(620, 450, 70, 70, 100, "left"),
        ];
    }
    update(deltaTime) {
        for (const actor of this.actors) {
            actor.update(deltaTime);
            if (actor.getRight() >= 800) {
                actor.movement = new LeftMovement(actor.movement.x, actor.movement.y, actor.movement.speed);
            }
            else if (actor.getLeft() <= 0) {
                actor.movement = new RightMovement(actor.movement.x, actor.movement.y, actor.movement.speed);
            }
        }
    }
    render(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
