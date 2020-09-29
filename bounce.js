var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(800,200,50,80);
  movingRect.shapeColor = "green";

  fixedRect.velocityX = 2;
  movingRect.velocityX = -3;
}

function draw() {
  background(0);  
  
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 
    ){
   
        fixedRect.velocityX = (-1) * fixedRect.velocityX;
        movingRect.velocityX = (-1) * movingRect.velocityX;
  }
  

  drawSprites();
}