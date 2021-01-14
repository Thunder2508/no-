
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy=new Boy(200,500,20,20);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(Engine);
  boy.display();
  
 
}



