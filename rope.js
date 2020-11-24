class Rope{

constructor(body1,body2,offsetX,offsetY){
var options={
    bodyA:body1,
     bodyB:body2,
     pointB:{x:offsetX,y:offsetY}


}
  

this.body = Constraint.create(options)
this.offsetX=offsetX;
this.offsetY=offsetY;

World.add(world, this.body); 



}



display(){

    rectMode(CENTER);
    fill("brown")
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
var pointA=this.body.bodyA.position
var pointB=this.body.bodyB.position
strokeWeight(2)
var Anchor1X=pointA.x
var Anchor1Y=pointA.y
var Anchor2X=pointB.x+this.offsetX
var Anchor2Y=pointB.y+this.offsetY
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)


}



}