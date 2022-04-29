function Planes(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getPlanesElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
        console.log('ok: ' + this.left);
    }

}

var planes = new Planes('su27.png', 20, 30, 200);

function start() {
    if (planes.left < window.innerWidth - planes.size) {
        planes.moveRight();
    }
    document.getElementById('game').innerHTML = planes.getPlanesElement();
    setTimeout(start, 100)
}

start();