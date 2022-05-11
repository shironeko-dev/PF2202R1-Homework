// Class Food
class Food {
    constructor(color) {
        this.position = new Block(10, 10);
        this.color = color;
    }

    draw() {
        this.position.drawCircle(this.color);
    }

    move() {
        var randomCol = Math.floor(Math.random() * (widthInBlocks - 2) + 1);
        var randomRow = Math.floor(Math.random() * (heightInBlocks - 2) + 1);
        this.position = new Block(randomCol, randomRow);
    }
}