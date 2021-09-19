class BlowerMouth
{
  constructor(x, y, w,h) 
  {
    let options = {
    isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    var angle = this.body.angle
    push();
    translate (pos.x,pos.y)
    rotate (angle)
    rectMode(CENTER);
    fill ("brown")
    rect(0,0, this.w, this.h);
    pop();
  }
}