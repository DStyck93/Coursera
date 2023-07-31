var canvas = document.getElementById("canvas");
var file = document.getElementById("fileChooser"); 
var img;

function uploadImg(){
  img = new SimpleImage(file);
  width = img.getWidth();
  height = img.getHeight();
  img.drawTo(canvas);
}

function doGrayscale(){
  if(imageIsLoaded()){
    var grayscaleImg = new SimpleImage(img.getWidth(), img.getHeight());
    for(var pixel of img.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      var r = pixel.getRed();
      var g = pixel.getGreen();
      var b = pixel.getBlue();
      var avg = getAvg(r, g, b);
      var grayscalePixel = grayscaleImg.getPixel(x, y);
      grayscalePixel.setRed(avg);
      grayscalePixel.setGreen(avg);
      grayscalePixel.setBlue(avg);
    }
    grayscaleImg.drawTo(canvas);
  
  }
}

function doLessBlue(){
  if(imageIsLoaded()){
    var newImg = new SimpleImage(img.getWidth(), img.getHeight());
    for(var pixel of img.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      var r = pixel.getRed();
      var g = pixel.getGreen();
      var b = pixel.getBlue();
      var newB;
      if(b - 50 < 0){
        newB = 0;
      } else{
        newB = b - 50;
      }
      var newPixel = newImg.getPixel(x, y);
      newPixel.setRed(r);
      newPixel.setGreen(g);
      newPixel.setBlue(newB);
    }
    newImg.drawTo(canvas);
  }
}

function doRed(){
  if(imageIsLoaded()){
    var newImg = new SimpleImage(img.getWidth(), img.getHeight());
    for(var pixel of img.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      var r = pixel.getRed();
      var g = pixel.getGreen();
      var b = pixel.getBlue();
      var newR;
      if(r + 50 > 255){
        newR = 255;
      } else{
        newR = r + 50;
      }
      var newPixel = newImg.getPixel(x, y);
      newPixel.setRed(newR);
      newPixel.setGreen(g);
      newPixel.setBlue(b);
    }
    newImg.drawTo(canvas);
  }
}

function doRainbow(){
  if(imageIsLoaded()){
    var height = img.getHeight();
    var newImg = new SimpleImage(img.getWidth(), height);
    for(var pixel of img.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      var r = pixel.getRed();
      var g = pixel.getGreen();
      var b = pixel.getBlue();
      var newPixel = newImg.getPixel(x, y);
      newPixel.setRed(r);
      newPixel.setGreen(g);
      newPixel.setBlue(b);
      if(y <= height / 7){
        makeRed(newPixel);
      } else if(y > height / 7 && y <= 2 * height / 7){
        makeOrange(newPixel);
      } else if(y > 2 * height / 7 && y <= 3 * height / 7){
        makeYellow(newPixel);
      } else if(y > 3 * height / 7 && y <= 4 * height / 7){
        makeGreen(newPixel);
      } else if(y > 4 * height / 7 && y <=  5 * height / 7){
        makeBlue(newPixel);
      } else if(y > 5 * height / 7 && y <= 6 * height / 7){
        makeIndigo(newPixel);
      } else{
        makeViolet(newPixel);
      }
    }
    newImg.drawTo(canvas);
  }
}

function doBlur(){
  if(imageIsLoaded()){
    var width = img.getWidth();
    var height = img.getHeight();
    var newImg = new SimpleImage(width, height);
    for(var pixel of img.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      var r = pixel.getRed();
      var g = pixel.getGreen();
      var b = pixel.getBlue();
      
      var random = Math.random() * 2;
      var newPixel = newImg.getPixel(x, y);
      if(random < 0.5){
        newPixel.setRed(r);
        newPixel.setGreen(g);
        newPixel.setBlue(b);
        
      } else{
        var newX = x + (Math.round(Math.random() * 20 - 10));
        if(newX < 0){
          newX = 0;
        } else if(newX > width - 1){
          newX = width - 1;
        }
        
        var newY = y + (Math.round(Math.random() * 20 - 10));
        if(newY < 0){
          newY = 0;
        } else if(newY > height - 1){
          newY = height - 1;
        }
        
        newPixel.setRed(img.getPixel(newX, newY).getRed());
        newPixel.setGreen(img.getPixel(newX, newY).getGreen());
        newPixel.setBlue(img.getPixel(newX, newY).getBlue());
      }
    }
    newImg.drawTo(canvas);
  }
}

function makeRed(pixel){
  var avg = getAvg(pixel.getRed(), pixel.getGreen(), pixel.getBlue())
  if(avg < 128){
    pixel.setRed(2 * avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
  } else{
    pixel.setRed(255);
    pixel.setGreen(2 * avg - 255);
    pixel.setBlue(2 * avg - 255);
  }
}

function makeOrange(pixel){
  var avg = getAvg(pixel.getRed(), pixel.getGreen(), pixel.getBlue())
  if(avg < 128){
    pixel.setRed(2 * avg);
    pixel.setGreen(0.8 * avg);
    pixel.setBlue(0);
  } else{
    pixel.setRed(255);
    pixel.setGreen(1.2 * avg - 51);
    pixel.setBlue(2 * avg - 255);
  }
}

function makeYellow(pixel){
  var avg = getAvg(pixel.getRed(), pixel.getGreen(), pixel.getBlue())
  if(avg < 128){
    pixel.setRed(2 * avg);
    pixel.setGreen(2 * avg);
    pixel.setBlue(0);
  } else{
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(2 * avg - 255);
  }
}

function makeGreen(pixel){
  var avg = getAvg(pixel.getRed(), pixel.getGreen(), pixel.getBlue())
  if(avg < 128){
    pixel.setRed(0);
    pixel.setGreen(2 * avg);
    pixel.setBlue(0);
  } else{
    pixel.setRed(2 * avg - 255);
    pixel.setGreen(255);
    pixel.setBlue(2 * avg - 255);
  }
}

function makeBlue(pixel){
  var avg = getAvg(pixel.getRed(), pixel.getGreen(), pixel.getBlue())
  if(avg < 128){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(2 * avg);
  } else{
    pixel.setRed(2 * avg - 255);
    pixel.setGreen(2 * avg - 255);
    pixel.setBlue(255);
  }
}

function makeIndigo(pixel){
  var avg = getAvg(pixel.getRed(), pixel.getGreen(), pixel.getBlue())
  if(avg < 128){
    pixel.setRed(0.8 * avg);
    pixel.setGreen(0);
    pixel.setBlue(2 * avg);
  } else{
    pixel.setRed(1.2 * avg - 51);
    pixel.setGreen(2 * avg - 255);
    pixel.setBlue(255);
  }
}

function makeViolet(pixel){
  var avg = getAvg(pixel.getRed(), pixel.getGreen(), pixel.getBlue())
  if(avg < 128){
    pixel.setRed(1.6 * avg);
    pixel.setGreen(0);
    pixel.setBlue(1.6 * avg);
  } else{
    pixel.setRed(0.4 * avg + 153);
    pixel.setGreen(2 * avg - 255);
    pixel.setBlue(0.4 * avg + 255);
  }
}

function getAvg(r, g, b){
  return (r + g + b) / 3;
}

function resetImg(){
  if(imageIsLoaded()){
    img.drawTo(canvas);
  }
}

function imageIsLoaded(){
  if(img == null){
    alert("No image has been selected.");
    return false;
    if(!img.complete){
      alert("Image has not finished loading yet.");
      return false;
    }
  }
  return true;
}