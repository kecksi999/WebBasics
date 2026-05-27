import type { Actor, BoundarySide } from "./Actor.js";

export interface ActorObserver {
  onBoundaryHit(actor: Actor, side: BoundarySide): void;
}