
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,ground,paper,binp1,binp1,binp3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

groundop = {

isStatic: true
}
	ground = Bodies.rectangle(600,580,width,10,groundop);
	World.add(world,ground);

paperop = {

	restitution: 0.3,
	friction: 0.5,
	density:1.2
}
	paper = Bodies.circle(100,100,20,paperop)
	World.add(world,paper);

binop = {

	isStatic: true
}
binp1 = Bodies.rectangle(810,517.5,20,115,binop);
binp2 = Bodies.rectangle(1090,517.5,20,115,binop);
binp3 = Bodies.rectangle(950,564,300,20,binop)
World.add(world,binp1);
World.add(world,binp2);
World.add(world,binp3);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  rectMode(CENTER);
  
  rect(ground.position.x,ground.position.y,width,10);
  ellipseMode(RADIUS)
  
  ellipse(paper.position.x,paper.position.y,20,20);

	
	rect(binp1.position.x,binp1.position.y,20,115);
	rect(binp2.position.x,binp2.position.y,20,115);
	rect(binp3.position.x,binp3.position.y,300,20);	

	


  if(keyDown("up")){

	  Matter.Body.applyForce(paper,paper.position,{x:20,y:-20});
  }
}



