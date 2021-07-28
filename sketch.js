const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var MyEngine,MyWorld,Ground,ball;


function setup() {
  createCanvas(400,400);
  MyEngine=Engine.create();
MyWorld=MyEngine.world;
var ground_options={
  isStatic:true
}


Ground=Bodies.rectangle(200,390,400,20,ground_options);
World.add(MyWorld,Ground);

console.log(Ground)


var ball_options={
  restitution:1
}


ball=Bodies.circle(200,200,40,ball_options);
World.add(MyWorld,ball);
}

function draw() {
  background("black");  
Engine.update(MyEngine);
rectMode(CENTER);
rect(Ground.position.x,Ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
  
}