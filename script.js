/*global createCanvas, background, rect, fill, noStroke, width, stroke, strokeWeight, line,
ellipse, keyCode, keyIsPressed, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, triangle, Canvas */

var xposition;
var yposition;

function setup() {
  createCanvas(800, 500);
  background(179,229, 255);
  xposition = 0;
  yposition = 0;
}

function draw() {
  background(179,229, 255);
  fill(59,0,179);
  noStroke();
  rect(30 + xposition, 247 + yposition, 40, 40);
 
  if (keyIsPressed && keyCode == LEFT_ARROW) xposition--;

  if (keyIsPressed && keyCode == RIGHT_ARROW) xposition++;
  
  if (keyIsPressed && keyCode == UP_ARROW) yposition--;
  
  if (keyIsPressed && keyCode == DOWN_ARROW) yposition++;
  
   if (yposition >= 780) {
      yposition = 780;
    }
    if (yposition <= 20) {
      yposition = 20;
    }
    if (xposition >= 800) {
      xposition = 800;
    }
    if (xposition <= 0) {
      xposition = 0;
    }

  
}


