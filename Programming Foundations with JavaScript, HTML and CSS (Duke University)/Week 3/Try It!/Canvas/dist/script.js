function changeColor() {
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  
  if (c1.className == "yellowback") {
    c1.className = "greenback";
    c2.className = "greyback";
  } else {
    c1.className = "yellowback";
    c2.className = "lightblueback";
  }
}

function doRed() {
  var c1 = document.getElementById("c1");
  
  // Change background color
  c1.style.backgroundColor = "red";
  
  var context = c1.getContext("2d");
  
  // Add rectangle
  context.fillStyle = "lightblue";
  context.fillRect(10, 10, 60, 60);
  context.fillRect(80, 10, 60, 60);
  
  // Add text
  context.fillStyle = "black";
  context.font = "20px Georgia";
  context.fillText("Box 1", 15, 45);
}

function doGreen() {
  var c1 = document.getElementById("c1");
  
  // Change background color
  c1.style.backgroundColor = "green";
  
  // Remove rectangle/text
  var context = c1.getContext("2d");
  context.clearRect(0, 0, c1.width, c1.height);
}