class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    getArea() {
        return this.width * this.height;
    }
    draw() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        ctx.fillStyle = "black";
        ctx.fillRect(10, 10, this.width, this.height);
    }
}
var width, height;
function modifyInput(obj, attribute) {
    switch (attribute) {
        case "width":
            width = parseFloat(obj.value);
            break;
        case "height":
            height = parseFloat(obj.value);
            break;
        default:
            console.log("Enter wrong");
            break;
    }
}
function drawRect() {
    const rect = new Rectangle(width, height);
    document.getElementById('result').innerText = 'Chu vi: ' + rect.getPerimeter() + ', Diện tích: ' + rect.getArea();
    rect.draw();
}