class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40, 30, options);
      this.width = 40;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(6)
      stroke("white")
      fill("orange");
      
  
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  