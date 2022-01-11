const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var block1;
var block2;
var block3;
var solo;



function setup() {
	createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var propriedadesdosolo={
    isStatic:true
  }

  var propriedadesdocircle={
    restitution:0.5,
    friction:1,
    frictionAir:0.01
  }
  
  var propriedadesdorectangle={
    restitution:0.7,
    frictionAir:0.1
  }
  
  var propriedadesdorectangle={
    restitution:0.01,
    frictionAir:0.3
  }
  solo=Bodies.rectangle(600,400,1200,20,propriedadesdosolo);
  World.add(world,solo);
 
  block1=Bodies.circle(220,30,10,propriedadesdocircle);
  World.add(world,block1);
  block2=Bodies.rectangle(110,50,10,10,propriedadesdorectangle);
  World.add(world,block2);
  block3=Bodies.rectangle(350,50,10,10,propriedadesdorectangle);
  World.add(world,block3);
    rectMode(CENTER);
    ellipseMode(RADIUS);

}


function draw() {
  background("yellow");
Engine.update(engine);

rect(solo.position.x,solo.position.y,1200,20);
  
ellipse(block1.position.x,block1.position.y,10);
rect(block2.position.x,block2.position.y,10,10);
rect(block3.position.x,block3.position.y,10,10);

}