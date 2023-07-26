function upload(){
  var filename = document.getElementById("filePicker");
  var img = new SimpleImage(filename);
  var canvas = document.getElementById("canvas");
  
  // For some reason width = undefined.
  // I assume this is an issue with the required library.
  // This makes adjusting the size of the canvas to match the picture impossible.
  var width = img.getWidth();
  
  img.drawTo(canvas);
}