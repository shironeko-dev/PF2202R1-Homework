// Class Block
class Block {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    drawSquare(color) {
        var x = this.col * blockSize;
        var y = this.row * blockSize;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x, y, blockSize, blockSize);
        ctx.fill();
    }

    drawCircle(color) {
        // Tính toán vị trí tâm
        var centerX = this.col * blockSize + blockSize / 2;
        var centerY = this.row * blockSize + blockSize / 2;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, blockSize / 2, 0, Math.PI * 2, false);
        ctx.fill();
    }

    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}