
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papers;
var grounds;
var box1,box2,box3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

  papers= new paper(100,200,30)
  grounds=new ground()
  box1=new Box(600,380,200,20)
  box2=new Box(500,340,20,100)
  box3=new Box(700,340,20,100)
}


function draw() {
  rectMode(CENTER);
  background('white');
  papers.display()
  grounds.display()
   box1.display()
  box2.display()
  box3.display()
  drawSprites();
 keyPressed()
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(papers.body,papers.body.position,{x:18,y:-1})
  }

}



