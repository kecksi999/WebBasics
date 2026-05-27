import type { ActorObserver } from "./ActorObserver.js";
import type { Actor, BoundarySide } from "./Actor.js";
import { LeftMovement } from "./LeftMovement.js";
import { RightMovement } from "./RightMovement.js";

export class BoundaryBounceObserver implements ActorObserver {
  onBoundaryHit(actor: Actor, side: BoundarySide): void {
    const { x, y, speed } = actor.movement;

    actor.setMovement(
      side === "right"
        ? new LeftMovement(x, y, speed)
        : new RightMovement(x, y, speed)
    );
  }
}