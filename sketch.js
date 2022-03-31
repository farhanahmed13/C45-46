var bg, bgImg
var bottomGround
var topGround
var hero , myHero
var monstersGroup;
var monsterImage;
var monster;
var left,right,leftImage,RightImage;
function preload(){
citybg = loadImage("assets/citybg.png");

hero = loadImage("assets/hero.png");
monsterImage = loadImage("assets/monster.png");
leftImage = loadImage("assets/left.png");
rightImage = loadImage("assets/right.png");
}

function setup(){
createCanvas(1500,1500)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(citybg);
bg.scale = 1.8

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating myHero      
myHero   = createSprite(100,200,20,50);
myHero .addImage(hero);
myHero .scale = 0.2

monstersGroup = createGroup();

left = createSprite(200,600);
left.addImage(leftImage);
right = createSprite(400,600);
right.addImage(rightImage);
right.scale = 0.4
left.scale = 0.4
}

function draw() {

  background("black");
        
         
 
          
            spawnMonsters();
             
            
  
            moveHero();

          
          

            drawSprites();
        
}
function spawnMonsters() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     monster = createSprite(300,-200,40,10);
    monster.y = Math.round(random(100,200));
    monster.addImage(monsterImage);
    monster.scale = 0.1;
    monster.velocityX = -3;
    
     //assign lifetime to the variable
    monster.lifetime = 200;
    
    //adjust the depth
    monster.depth = hero.depth;
    hero.depth = hero.depth + 1;
    
    //adding cloud to the group
   monstersGroup.add(monster);

    }
}
function moveHero(){
  
  
    if (mousePressedOver(right)) {
    ( hero.x = hero.x +5);
    }
    
    if (mousePressedOver(left)) {
    ( hero.x = hero.x -5);
    }
    if(monstersGroup.isTouching(hero)){
      
      textSize(40);
      fill("blue");
      stroke("White");
      text("GAME OVER",200,200)
    }
    console.log("moveHero78")
  
  
}
