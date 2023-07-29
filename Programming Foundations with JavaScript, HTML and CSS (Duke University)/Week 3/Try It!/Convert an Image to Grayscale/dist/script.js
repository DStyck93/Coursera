var img;

function upload(){
  var filename = document.getElementById("filePicker");
  var canvas = document.getElementById("canvas");
  img = new SimpleImage(filename);
  img.drawTo(canvas);
}

function makeGray(){
  for(var px of img.values()){
    var r = px.getRed();
    var g = px.getGreen();
    var b = px.getBlue();
    var avg = (r + g + b) / 3;
    px.setRed(avg);
    px.setGreen(avg);
    px.setBlue(avg);
  }
  var canvas = document.getElementById("canvas2");
  img.drawTo(canvas);
}