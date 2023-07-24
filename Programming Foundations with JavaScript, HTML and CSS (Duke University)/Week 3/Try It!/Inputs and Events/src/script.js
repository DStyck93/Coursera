// Change the background color of the canvas to black
function makeBlack() {
  var canvas = document.getElementById("canvas");
  canvas.style.backgroundColor = "black";
}

// Uses a color picker to change the background color of the canvas
function changeColor() {
  var canvas = document.getElementById("canvas");
  var color = document.getElementById("color").value;
  canvas.style.backgroundColor = color;
}

// Uses a slider to make a square of size 1-100
function doSquare(){
  var canvas = document.getElementById("canvas");
  var slider = document.getElementById("slider");
  var width = slider.value;
  var height = width;
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "lightblue";
  context.fillRect(10, 10, width, height);
}