// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { ActorFactory } from "./actors/ActorFactory.js";
import { BoundaryBounceObserver } from "./actors/BoundaryBounceObserver.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
        this.bounceObserver = new BoundaryBounceObserver();
    }
    init() {
        const factory = ActorFactory.getInstance();
        this.actors = factory.createDemoActors();
        for (const actor of this.actors) {
            actor.addObserver(this.bounceObserver);
        }
    }
    update(deltaTime) {
        for (const actor of this.actors) {
            actor.update(deltaTime);
            if (actor.getRight() >= 800) {
                actor.notifyBoundaryHit("right");
            }
            else if (actor.getLeft() <= 0) {
                actor.notifyBoundaryHit("left");
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
