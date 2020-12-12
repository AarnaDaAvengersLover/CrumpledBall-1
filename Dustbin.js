class Dustbin{
    constructor(){
      var options={
        isStatic:true
      }
      this.rightSide=Bodies.rectangle(width-50,height-65,20,80,options);
      this.lefttSide=Bodies.rectangle(width-170,height-65,20,80,options);
      this.bottomSide=Bodies.rectangle(width-110,height-30,100,20,options);
      World.add(world,this.rightSide);
      World.add(world,this.lefttSide);
      World.add(world,this.bottomSide);
    }
    display(){
      rectMode(CENTER);
      rect(this.rightSide.position.x,this.rightSide.position.y,20,80);
      rect(this.lefttSide.position.x,this.lefttSide.position.y,20,80);
      rect(this.bottomSide.position.x,this.bottomSide.position.y,100,20);
  
  
    }
  }