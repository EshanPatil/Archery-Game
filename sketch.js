var bow , arrow,  background, arrow, red, blue, green, pink
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png")  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  arrowGroup = new Group();
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
}

death = 0
score = 0;
PLAY = 1
END = 0
var gameState = PLAY


function draw() {
 background(0);
 

 if (gameState === PLAY) {
  scene.velocityX = -3 
  bow.y = World.mouseY
  
  if (keyWentDown("space")) {
    createArrow();
  }
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
    

} 
else if (gameState === END) {
  scene.velocityX = 0
  bow.destroy();
  textSize(20)
  text("You won!", 300, 100)
  redB.destroyEach();
  redB.setVelocityEach(0);
  blueB.destroyEach();
  blueB.setVelocityEach(0);
  greenB.destroyEach(); 
  redB.setVelocityEach(0);
  pinkB.destroyEach();
  pinkB.setVelocityEach(0);
}

if (frameCount>1000) {
  gameState=END
}

if (arrowGroup.isTouching(redB)) {
  arrowGroup.destroyEach();
  redB.destroyEach();
  score++
}

if (arrowGroup.isTouching(blueB)) {
  arrowGroup.destroyEach();
  blueB.destroyEach();
  score = score + 2
}

if (arrowGroup.isTouching(greenB)) {
  arrowGroup.destroyEach();
  greenB.destroyEach();
  score = score + 5
}

if (arrowGroup.isTouching(pinkB)) {
  arrowGroup.destroyEach();
  pinkB.destroyEach();
  score = score + 10
}

if (red.x>140) {
  death = death + 1
}

var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 90 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }

  if (frameCount % 170 == 0) {
    blueBalloon();
  }

  if (frameCount % 290 == 0) {
    greenBalloon();
  }
  
if (frameCount % 400 == 0) {
  pinkBalloon();
}

 


  
   drawSprites();
 textSize(20)
 text ("Score: " + score, 270, 30)
}


// Creating  arrows for bow
function createArrow(){
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}



function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red.setCollider("circle", 0, 0, 30)
  redB.add(red)
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4
  blue.scale= 0.1
  blue.lifetime = 200
  blue.setCollider("circle", 0, 0, 30)
  blueB.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0, Math.round(random(20, 270)), 10, 10)
  green.addImage(green_balloonImage);
  green.velocityX = 5
  green.scale= 0.1
  green.lifetime = 150
  green.setCollider("circle", 0, 0, 30)
  greenB.add(green)
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0, Math.round(random(20, 270)), 10, 10)
  pink.addImage(pink_balloonImage);
  pink.velocityX = 8
  pink.scale= 1.5
  pink.lifetime = 150
  pink.setCollider("circle", 0, 0, 30)
  pinkB.add(pink)
}





