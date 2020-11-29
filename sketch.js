
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var rectangle1,rectangle2,rectangle3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;
	 
	
	ground = new Ground(600,600,700,20);
	paperBall = new Paper(400,590,1.2);
	rectangle1 = new Dustbin(560,590,6,15);
	rectangle2 = new Dustbin(570,590,15,6);
	rectangle3 = new Dustbin(580,590,6,15);


	Engine.run(engine);
  
}


function draw() {
 drawSprites();
  background("ground");
  
 

  ground.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  paperBall.display();
 
}



