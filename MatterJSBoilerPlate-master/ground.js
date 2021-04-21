class Ground {
    constructor(x, y,height,width) {
      
      this.body = Bodies.rectangle(x, y, height,width,{isStatic:true});
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.height,this.width);
      
    }
  };
  