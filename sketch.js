var fixedRect, movingRect;
var gameBox1, gameBox2, gameBox3, gameBox4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,400,100,100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,150);
  movingRect.shapeColor = "green";

  gameBox1 = createSprite(100, 100, 50, 50);
  gameBox1.shapeColor = "green";
  gameBox2 = createSprite(200, 100, 50, 50);
  gameBox2.shapeColor = "green";
  gameBox3 = createSprite(300, 100, 50, 50);
  gameBox3.shapeColor = "green";
  gameBox4 = createSprite(400, 100, 50, 50);
  gameBox4.shapeColor = "green";


  fixedRect1 = createSprite(400, 100, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect1 = createSprite(400, 800,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;

  movingRect1.velocityY = -5;
  fixedRect1.velocityY = +5;
}

function draw() {
  background(0); 
  movingRect.x= World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, gameBox3)){
    gameBox3.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    gameBox3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(movingRect1, fixedRect1)
  drawSprites();
}

