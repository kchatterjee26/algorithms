var fixedRect, movingRect, rect1, rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor = "yellow";
  rect1.debug = true;

  rect2 = createSprite(1000, 20, 50, 50);
  rect2.shapeColor = "green";
  rect2.debug = true;
  rect2.velocityY = 2;

  rect3 = createSprite(1000, 600, 80, 30);
  rect3.shapeColor = "green";
  rect3.debug = true;
  rect3.velocityY = -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (touching(movingRect, rect1) === true) {
    movingRect.shapeColor = "red";
    rect1.shapeColor = "blue";
  }
    else {
      movingRect.shapeColor = "green";
      rect1.shapeColor = "yellow";
    }

    bounce(rect2,rect3);

  drawSprites();
}