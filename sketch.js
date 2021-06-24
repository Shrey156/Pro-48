var database,form,player,playerCount,game;
var gameState = 0;
var allPlayers,plr;
var ant1,ant2,ants;
var ant1Img,ant2Img;
var obstacle1Img,obstacle2Img,obstacle3Img,obstacle,obstacleGroup,width_random,height_random;
var groundImg,backgrounds;
var wall1,wall2;

function preload() {
  ant1Img = loadImage("img/ant1.png");
  ant2Img = loadImage("img/ant2.png");
  obstacle1Img = loadImage("img/beetle1.png");
  obstacle2Img = loadImage("img/spider1.png");
  obstacle3Img = loadImage("img/beetle2.png");
  groundImg = loadImage("img/ground3.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  database = firebase.database();
  obstacleGroup = createGroup();
  game = new Game();
  game.getGameState();
  game.start();


wall1 =createSprite(0,displayHeight/2,10,displayHeight);
wall2 = createSprite(displayWidth,displayHeight/2,10,displayHeight);

backgrounds = createSprite(displayWidth/2,displayHeight/2,10,10);
backgrounds.addImage(groundImg);
backgrounds.scale =0.9;
backgrounds.velocityY=2;
backgrounds.y = height/2;
  
  if(frameCount%60===0){ 
width_random = random(0,displayWidth-50);

obstacle = createSprite(width_random,0);
obstacle.velocityX=random(-8,9);
obstacle.velocityY=random(4,9);


var rand = Math.round(random(1,3));
switch(rand){
case 1:obstacle.addImage(obstacle1Img);
break;
case 2:obstacle.addImage(obstacle2Img);
break;
case 3:obstacle.addImage(obstacle3Img);
break;
default:
break;
}

obstacleGroup.add(obstacle);
obstacleGroup.lifetime=1000;
  }
}

function draw() {
  background(255);  
 
if(playerCount===2){
  game.updateGameState(1); 
}
if(gameState===1){
  clear();
  game.play();
}
wall1.visible=false;
wall2.visible=false;
depths();
if(backgrounds.y > displayHeight){
  backgrounds.y = height/2;
}

createEdgeSprites();
obstacleGroup.bounceOff(wall1);
obstacleGroup.bounceOff(wall2);
}

function depths(){
  backgrounds.depth =-100;
}