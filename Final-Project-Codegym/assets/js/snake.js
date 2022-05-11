// Class Snake
class Snake {
    constructor(color) {
        this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
        this.color = color;
        this.direction = "right";
    }

    draw() {
        this.segments.forEach((segment) => segment.drawSquare(this.color));
        this.segments[0].drawSquare("#235df1");
    }

    move() {
        var head = this.segments[0];
        var newHead;

        if (this.direction == "right") {
            newHead = new Block(head.col + 1, head.row);
        } else if (this.direction == "down") {
            newHead = new Block(head.col, head.row + 1);
        } else if (this.direction == "left") {
            newHead = new Block(head.col - 1, head.row);
        } else if (this.direction == "up") {
            newHead = new Block(head.col, head.row - 1);
        }

        if (this.checkCollision(newHead)) {
            gameOver();
            return;
        }

        this.segments.unshift(newHead);

        if (newHead.equal(food.position)) {
            score++;
            food.move();
            canvas.innerHTML = '<audio autoplay src="./assets/media/audio/Snake.mp3"></audio>';
        } else {
            this.segments.pop();
        }
    }

    setDirection(newDirection) {
        if (
            (this.direction == "up" && newDirection == "down") ||
            (this.direction == "left" && newDirection == "right") ||
            (this.direction == "down" && newDirection == "up") ||
            (this.direction == "right" && newDirection == "left")
        )
            return;

        this.direction = newDirection;
    }

    checkCollision(head) {
        // Kiểm tra va chạm với thành game Board
        var left = head.col < 0;
        var top = head.row < 0;
        var right = head.col > widthInBlocks - 1;
        var bottom = head.row > heightInBlocks - 1;
        var wallCollision = left || top || right || bottom;

        // Kiểm tra va chạm với thân snake
        var selfCollision = false;
        for (var i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            }
        }

        return wallCollision || selfCollision;
    }
}