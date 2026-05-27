// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { ActorFactory } from "./actors/ActorFactory.js";
import { BoundaryBounceObserver } from "./actors/BoundaryBounceObserver.js";
import type { Actor } from "./actors/Actor.js";

class MyGame extends Game {
  private actors: Actor[] = [];
  private readonly bounceObserver = new BoundaryBounceObserver();

  init(): void {
    const factory = ActorFactory.getInstance();
    this.actors = factory.createDemoActors();

    for (const actor of this.actors) {
      actor.addObserver(this.bounceObserver);
    }
  }

  update(deltaTime: number): void {
    for (const actor of this.actors) {
      actor.update(deltaTime);

      if (actor.getRight() >= 800) {
        actor.notifyBoundaryHit("right");
      } else if (actor.getLeft() <= 0) {
        actor.notifyBoundaryHit("left");
      }
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (const actor of this.actors) {
      actor.render(ctx);
    }
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
