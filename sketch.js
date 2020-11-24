
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var cradle;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

cradle= new Cradle(450,100,500,80)
rope1=new Rope (650,550,90,90)
bobObject1= new BobObject(bobObject1.body,roofObject.body,-40*2, 0)
rope2=new Rope(550,350,200,50)
bobObject2= new BobObject(bobObject2.body,roofObject.body,-40*1, 0)
rope3= new Rope(450,363,5,450)
bobObject3= new BobObject(450,550,90,90)
rope4= new Rope(350,355,5,450)
bobObject4= new BobObject(350,550,90,90)
rope5= new Rope(250,350,5,450)
bobObject5= new BobObject(250,550,90,90)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 cradle.display();
 rope1.display();
 bobObject1.display();
 rope2.display();
 bobObject2.display();
 rope3.display();
 bobObject3.display();
 rope4.display();
 bobObject4.display();
 rope5.display();
 bobObject5.display();

}

function keyPressed() 
{ if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(ball1.body, ball1.body.position,
		
		{x:-50,y:-45}); } 
	
	}

