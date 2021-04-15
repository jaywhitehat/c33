const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var rock;
var b1,b2,b3,b4,b5,b6;
var c1,c2,c3,c4,c5;
var trainSound ;
var crashSound;
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  b1 = new Boggie(50,150,50,50);
  b2 = new Boggie(150,150,50,50);
  b3 = new Boggie(250,150,50,50);
  b4 = new Boggie(350,150,50,50);
  b5 = new Boggie(450,150,50,50);
  b6 = new Boggie(550,150,50,50);

  c1 = new Chain(b1.body,b2.body);
  c2 = new Chain(b2.body,b3.body);
  c3 = new Chain(b3.body,b4.body);
  c4 = new Chain(b4.body,b5.body);
  c5 = new Chain(b5.body,b6.body);

  rock = new Rock(1100,150,100,100);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  b1.show(); 
  b2.show(); 
  b3.show(); 
  b4.show(); 
  b5.show(); 
  b6.show(); 
  
  c1.show(); 
  c2.show(); 
  c3.show(); 
  c4.show(); 
  c5.show(); 

  rock.show();

  
  var collision = Matter.SAT.collides(b6.body,rock.body);
  if(collision.collided) {
  { flag=1; } 
     if(flag ===1)
     { textSize(30); 
      stroke(3);
       fill('blue'); 
       text("CRASH",500,200);
        crashSound.play(); } 
     }
  
  }

  
function keyPressed(){
  if (keyCode === RIGHT_ARROW){
Matter.Body.applyForce(b6.body,{x:b6.body.position.x,y:b6.body.position.y},{x:0.5,y:0});
trainSound.play();
  }
}