var MAN;
var MAN_img;
var ground; 
var back_img;
var obstacle_img;
var obstacle;
var ground_img;
var standingman;




function preload(){

 MAN_img = loadAnimation("S1.png","S2.png","S3.png","S4.png","S5.png","S6.png")
 back_img = loadImage("Background.png");
 obstacle_img = loadImage("obstacle1.png");
 ground_img = loadImage("ground2.png");
standingman = loadImage("S1.png");

}


function setup() {
  createCanvas(800,400);
  
  
  MAN = createSprite(150, 350, 50, 50);
  MAN.addImage("standing",standingman);
  MAN.addAnimation("MAN",MAN_img)

  ground = createSprite(400,390,800,20);
  ground.addImage("GR1",ground_img);
  ground.velocityX = -5;


}

function draw() {
  background(back_img);  
  
  
  MAN.collide(ground);
  
  if(ground.x<100){
 ground.x = ground.width/2;   
  }

  if(keyDown("SPACE")){
   MAN.changeAnimation("MAN",MAN_img)
   MAN.velocityY = -5;

  }
  MAN.velocityY += 0.8;




  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
    
   if(frameCount %60 === 0 ){
      obstacle = createSprite(750,200,20,20);  
      obstacle.addImage("OB1",obstacle_img);
      obstacle.scale = 0.4;
      obstacle.velocityX = -6;
      obstacle.y = Math.round(random(120,220))
   }  

}




//1. All character Images including background 2. All PC and NPC should be ready in working condition