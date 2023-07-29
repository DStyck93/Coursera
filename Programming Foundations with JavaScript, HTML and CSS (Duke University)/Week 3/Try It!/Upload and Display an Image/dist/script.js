function upload(){
  var filename = document.getElementById("filePicker");
  var img = new SimpleImage(filename);
  var canvas = document.getElementById("canvas");
  img.drawTo(canvas);
}