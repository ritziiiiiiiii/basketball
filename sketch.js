const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, basket;
var bg;
var sling1;
var ground


var score = 0;

function preload() {
    bg = loadImage("sprites/hsmbg.png");
    
    
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    ground = createSprite(5000, 10, displaywidth, displayHeight)
    engine = Engine.create();
    world = engine.world;
    basket1=new Basket()
    ball1=new Ball()
    sling1=new SlingShot(ball1.rect,{x: displayWidth/2+10, y: displayHeight-500})

    


    
}

function draw(){
    background(bg);
    Engine.update(engine);

    basket1.display()
    ball1.display() 
    sling1.display() 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball1.rect, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    sling1.fly();
    //gameState = "launched";
}
