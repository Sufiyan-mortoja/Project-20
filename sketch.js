var car,wall
var speed,weight





function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
 car=createSprite(50, 200, 50, 50);
 car.velocityX=speed
 car.shapeColor="red"
 wall=createSprite(1500,200,60,height/2)
 wall.shapeColor="black"
}

function draw() {
  background("white");  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0
    var demormartation=0.5 * weight * speed * speed/22500
    if(demormartation>180){
      car.shapeColor="blue"
    }
    if(demormartation<180 && demormartation>100){
      car.shapeColor="green"
    }
    if(demormartation<100){
      car.shapeColor="yellow"
    }
  }
  drawSprites();
}