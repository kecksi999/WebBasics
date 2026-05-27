import { LeftMovement } from "./LeftMovement.js";
import { RightMovement } from "./RightMovement.js";
export class BoundaryBounceObserver {
    onBoundaryHit(actor, side) {
        const { x, y, speed } = actor.movement;
        actor.setMovement(side === "right"
            ? new LeftMovement(x, y, speed)
            : new RightMovement(x, y, speed));
    }
}
