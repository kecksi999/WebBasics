export class Actor {
    constructor(movement) {
        this.movement = movement;
        this.observers = [];
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
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }
    notifyBoundaryHit(side) {
        for (const observer of this.observers) {
            observer.onBoundaryHit(this, side);
        }
    }
    setMovement(movement) {
        this.movement = movement;
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
}
