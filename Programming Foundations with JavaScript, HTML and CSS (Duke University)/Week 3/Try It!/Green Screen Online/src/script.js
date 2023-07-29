var canvas1 = document.getElementById("c1");
var canvas2 = document.getElementById("c2");
var fgImg;
var bgImg;

function uploadFg(){
  var file = document.getElementById("fg");
  fgImg = new SimpleImage(file);
  fgImg.drawTo(canvas1);
}

function uploadBg(){
  var file = document.getElementById("bg");
  bgImg = new SimpleImage(file);
  bgImg.drawTo(canvas2);
}

function doGreenScreen(){
  if(fgImg == null || bgImg == null){
    alert("Please choose 2 images.");
    return;
  }
  
  if(!fgImg.complete() || !bgImg.complete()){
    alert("Images are still loading");
    return;
  }
  
  clearCanvas();
  var img = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());
  for(var px of fgImg.values()){
    var x = px.getX();
    var y = px.getY();
    if(px.getGreen() > px.getRed() + px.getBlue()){
      var bgPx = bgImg.getPixel(x, y);
      img.setPixel(x, y, bgPx);
    } else{
      img.setPixel(x, y, px);
    }
  }
  img.drawTo(canvas1);
}

function clearCanvas(){
  var context1 = canvas1.getContext("2d");
  var context2 = canvas2.getContext("2d");
  context1.clearRect(0, 0, 5000, 5000);
  context2.clearRect(0, 0, 5000, 5000);
}