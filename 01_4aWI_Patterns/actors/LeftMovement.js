export class LeftMovement {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    update(deltaTime) {
        this.x -= deltaTime * this.speed;
    }
}
