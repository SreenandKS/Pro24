
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,d1,d2,d3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	  paper = new Paper(75,680,70);
    d1 = new Dustbin(900,600,10,150);
    d2 = new Dustbin(750,600,10,150);
    d3 = new Dustbin(820,670,150,10);
   
    ground = new Ground(0,685,2400,10);	
	Engine.run(engine);
  
}


function draw() {
  
  background("brown");
  
  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  
  // keyPressed();

  drawSprites();
 

}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-1100});
  }
}
