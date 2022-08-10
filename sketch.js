var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacle1, obstacle2, obstacle3
var obstacleimg1, obstacleimg2, obstacleimg3;
var PLAY = 1
var END = 0
var obstacleGroup
var gameState = "PLAY"

function preload(){
bgImg = loadImage("assets/bg.png")
obstacleimg1 = loadImage("assets/obsBottom1.png")
obstacleimg2 = loadImage("assets/obsBottom2.png")
obstacleimg3 = loadImage("assets/obsBottom3.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = true;


topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

obstacleGroup = new Group();

obstacle1 = createSprite(100,350,20,50);
obstacle1.addImage(obstacleimg1)
obstacle1.scale = 0.01;
obstacleGroup.add(obstacle1);

obstacle2 = createSprite(200,350,20,50);
obstacle2.addImage(obstacleimg2);
obstacle2.scale = 0.01;
obstacleGroup.add(obstacle2);

obstacle3 = createSprite(300,350,20,50);
obstacle3.addImage(obstacleimg3);
obstacle3.scale = 0.01;
obstacleGroup.add(obstacle3);




}

function draw() {
  
  background("black");
        
           if(gameState == "PLAY") {
            //making the hot air balloon jump
            if(keyDown("space")) {
              balloon.velocityY = -6 ;
              
            }
             //adding gravity
            balloon.velocityY = balloon.velocityY + 2;
           } 
          if(balloon.isTouching(obstacleGroup)){
            gameState = "END"
            balloon.velocityX = 0
            balloon.velocityY = 0
           }
        drawSprites();
        
}
