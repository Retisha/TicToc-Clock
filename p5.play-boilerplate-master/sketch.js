var hr, min, sec;
var hrAngle, minAngle,secAngle;
function setup() {
  createCanvas(400,400);
 angleMode()
}

function draw() {
  background(0);  

  translate(200,200)
  rotate(-90)

  hr=hour();
  min=minute();
  sec=second();

  noFill();
  stroke("white")
  strokeWeight(3)
  ellipse(0,0,300,300)
  ellipse(0,0,280,280)
  ellipse(0,0,260,260)

  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)

  push();
  stroke("red")
  strokeWeight(4)
  rotate(secAngle)
  line(0,0,100,0)
  pop();

  push();
  stroke("yellow")
  strokeWeight(4)
  rotate(minAngle)
  line(0,0,80,0)
  pop();

  push();
  stroke(0,255,0)
  strokeWeight(5)
  rotate(hrAngle)
  line(0,0,50,0)
  pop();

  fill("white")
  strokeWeight(8)
  point(0,0)

  stroke("red")
  noFill();
  arc(0,0,300,300,0,secAngle)

  stroke("yellow")
  noFill();
  arc(0,0,280,280,0,minAngle)

  stroke(0,255,0)
  noFill();
  arc(0,0,260,260,0,hrAngle)

  drawSprites();
}