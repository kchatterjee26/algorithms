var rect1;
var rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "red";
  rect2 = createSprite(250,60,20,70);
  rect2.shapeColor = "blue";
}

function draw() {
  background(0,0,0); 

  rect2.y = mouseY;
  rect2.x = mouseX;

  if (rect2.x - rect1.x < rect2.width/2 + rect1.width/2 &&
    rect1.x - rect2.x < rect2.width/2 + rect1.width/2 && 
    rect2.y - rect1.y < rect2.height/2 + rect1.height/2 &&
    rect1.y - rect2.y < rect1.height/2 + rect1.height/2) {
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "yellow";
  }
    else {
      rect1.shapeColor = "red";
      rect2.shapeColor = "blue";
    }
  drawSprites();
}