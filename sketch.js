const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3;
var hex1, hex1Image;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12; 

function preload() {
    hex1Image = loadImage("polygon.png");
}
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    //hex1 = new Hexagon(100, 400, 50, 50);
    ground1 = new Ground(width / 2, height - 10, width, 20);
    ground2 = new Ground(550, height - 200, 300, 20);
    ground3 = new Ground(1200, height - 500, 400, 20);

    hex1 = Bodies.circle(50,200, 20)
    World.add(world, hex1)

    slingshot = new SlingShot(hex1,{x:100, y:200});
}



function draw() {
    background("black");
   
  //  hex1.body.position.x = mouseX;
   // hex1.body.position.y = mouseY;
   // hex2 = create/Sprite(300, 2000);
    //hex2.addImage("hexagon", hex1Image);
   
    ground1.display();
    ground2.display();
    ground3.display();
    //hex1.display();
    //slingshot.attach(hex1);
    //slingshot.display();
    drawSprites();
    //console.log(hex1.body.position.x);
    //console.log(hex1.body.position.y);

    imageMode(CENTER); 
    image (hex1Image, hex1.position.x, hex1.position.y, 50,50)
}
function mouseDragged(){
    Matter.Body.setPosition(hex1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
