//Setting the canvas
const gameOverEle = document.querySelector(".game-over");
const btnPlayAgain = document.getElementById("btn-play-again");
const scoreEle = document.getElementById("score");
const music = document.getElementById("music");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

//Setting the block
var blockSize = 20;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;

// It’s not a bug, it’s a feature
document.addEventListener("keydown", musicPlay);
function musicPlay() {
    document.getElementById("music").play();
    document.removeEventListener('keydown', musicPlay);
}

// Hiển thị điểm trên nền canvas
function drawScore() {
  ctx.font = "bold 16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${score}`, 10, 20);
}

// Game over => Hiển thị thông tin điểm người chơi
function gameOver() {
  music.pause();
  canvas.innerHTML = '<audio autoplay src="./assets/media/audio/Dead.mp3"></audio>';
  gameOverEle.style.display = "flex";
  scoreEle.innerText = score;
  clearInterval(interval);
}

// Click chơi lại game
btnPlayAgain.addEventListener("click", function () {
  window.location.reload();
});

// Biến điều hướng A,W,D,S
var directions = {
  65: "left",
  87: "up",
  68: "right",
  83: "down",
};

document.addEventListener("keydown", function (e) {
  var newDirection = directions[e.keyCode];
  if (newDirection) {
    snake.setDirection(newDirection);
  }
});

var score;
var snake;
var food;
var interval;

//Start Game function
function init() {

  // Khởi tạo điểm
  score = 0;
  
  // Khởi tạo đối tượng body snake + food
  snake = new Snake("#4674ea");
  food = new Food("#606060");
  
  // Tạo game loop
  interval = setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.draw();
    snake.move();
    food.draw();
  }, 100);
}
window.onload = init;
