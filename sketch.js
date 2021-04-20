
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;
const Engine= Matter.Engine;

var engine,world;

var ball,ballImg,ground;
var stand1,stand2;
var slingShot;

function preload(){
ballImg=loadImage("polygon.png")
}

function setup(){
engine=Engine.create();
world=engine.world;
createCanvas(900,400)
ground=new Ground();
stand1=new Stand(380,300,270,10);

//floor one
block1= new Block(280,275,30,40);
block2= new Block(310,275,30,40);
block3= new Block(340,275,30,40);
block4= new Block(370,275,30,40);
block5= new Block(400,275,30,40);
block6= new Block(430,275,30,40);
block7= new Block(460,275,30,40);
block8= new Block(490,275,30,40);

//floor two
block9= new Block(315,235,30,40);
block10= new Block(345,235,30,40);
block11= new Block(375,235,30,40);
block12= new Block(405,235,30,40);
block13= new Block(435,235,30,40);
block14= new Block(465,235,30,40);
//floor three
block15= new Block(350,195,30,40);
block16= new Block(380,195,30,40);
block17= new Block(410,195,30,40);
block18= new Block(440,195,30,40);
//floor four
block19= new Block(385,155,30,40);
block20= new Block(415,155,30,40);
//floor five
block21= new Block(400,115,30,40);


ball= Bodies.circle(50,200,20);
World.add(world,ball);
slingShot=new SlingShot(this.ball,{x:200,y:200});
}
function draw(){
background("white")
Engine.update(engine);

strokeWeight(2);
stroke(15);
stand1.display();


stroke(15);
fill("blue")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
stroke(15)
fill("pink")
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
fill("turquoise")
block15.display();
block16.display();
block17.display();
block18.display();
stroke(15)
fill("purple")
block19.display();
block20.display();
fill("gold")
block21.display();

textSize(20);
text("drag the line and hit to your target",575,250);
imageMode(CENTER)
image(ballImg,ball.position.x,ball.position.y,40,40);
slingShot.display();
}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}
function mouseReleased(){
slingShot.fly();
}


