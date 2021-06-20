var ship, ship_moving;
var seaImage;
var sea;

function preload() {
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup() {
  createCanvas(600, 600);

  sea = createSprite(400, 200, 300, 20);
  sea.addImage(seaImage);
  sea.scale = 0.2;
  sea.velocityX = -5;


  ship = createSprite(300, 200, 20, 50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.1;
  ship.x=300;

}


function draw() {
  background("white");


  if (sea.x<0) {
    sea.x=sea.width/8;
  }
  
  drawSprites();
}