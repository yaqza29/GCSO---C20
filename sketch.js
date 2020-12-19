  var car;
  var wall;
  var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(100, 200, 50, 50);
  car.shapeColor = rgb(0,172,230);

  wall = createSprite(1400, 200, 60, height/2);
  wall.shapeColor = rgb(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

}

function draw() {
  background(rgb(255,232,230)); 

  car.velocityX = speed; 

  if(wall.x-car.x<(car.width+wall.width/2)){

    car.velocityX = 0

    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = color(235,230,0);
    }

    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}