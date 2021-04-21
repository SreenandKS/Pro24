class Dustbin {
    constructor(x, y,height,width) {
     
      this.body = Matter.Bodies.rectangle(x, y, height,width,{isStatic:true,restitution:0,density:0.1,friction:0});
      this.width = width;
      this.height = height;
      // this.img = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill(255,144,85);
      stroke(255,144,85);
      strokeWeight(0.5);
      rect(0,0, this.height,this.width);
     
      
      pop();
    }
  };
  