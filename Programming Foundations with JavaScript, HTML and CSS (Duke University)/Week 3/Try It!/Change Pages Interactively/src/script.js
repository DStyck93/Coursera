function changeColor() {
  var d1 = document.getElementById("d1");
  var d2 = document.getElementById("d2");
  
  if (d1.className == "lightblueback") {
    d1.className = "greenback";
    d2.className = "greyback";
  } else {
    d1.className = "lightblueback";
    d2.className = "yellowback";
  }
}

function changeText() {
  var d1 = document.getElementById("d1");
  var d2 = document.getElementById("d2");
  
  d1.innerHTML = "New Div1";
  d2.innerHTML = "New Div2";
}