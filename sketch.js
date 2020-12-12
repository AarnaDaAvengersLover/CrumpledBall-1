const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,body,world;
var boxLine1,boxLine2,boxLine3;


function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,600,50,50);

	dustbinLine1=new Dustbin(600,600,200,20);
	

	dustbinline2=new Dustbin(500,540,20,140);
	

	dustbinline3=new Dustbin(700,540,20,140);
	

	ground=new Ground(400,635,800,30);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display();

  dustbinLine1.display();
  dustbinline2.display();
  dustbinline3.display();

  ground.display();





  

  

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x: 85,y:-85})
	}
  }

