//to give variable to objects
  var car, wall;

//to give variables to physics variables 
  var speed, weight;


function setup() {

 //to create canvas  
  createCanvas(1600,400);

 //to give random values to variables
  speed = random(55,90);
  weight = random(400,1500);

 //to create sprites of the variables
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1300, 200, 60, 200);

 //to give colours to variables
  wall.shapeColor = ("white"); 

 //to give velocity to variables
  car.velocityX = speed; 

}


function draw() {
 //to create a canvas
  background ("black"); 
 //when car is touching the wall
 if(wall.x-car.x < (car.width + wall.width)/2){
   car.velocityX = 0;
   //the formula of deformation
   var deformation = 0.5*weight*speed*speed/22509;

   if(deformation>180){
     car.shapeColor = color(255,0,0);
   } 

   if(deformation<180 && deformation>100){
     car.shapeColor = color(230,230,0);
   }

   if(deformation<100){
     car.shapeColor = color(0,255,0);
   } 
 } 

 //to draw sprites
  drawSprites();
}