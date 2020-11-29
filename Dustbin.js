class Dustbin{
  constructor(x,y,width,height){
     var options = {
       'isStatic' : true,
       'friction' : 0.6 
      



     }
 x = x;
 y = y;
 this.width = width;
 this.height = height;    
 this.body = Bodies.rectangle(x,y,width,height,options)
 World.add(world, this.body);


  }
 display(){
  var pos = this.body.position

   push();
   strokeWeight(3);
   fill("white");
   rect(pos.x,pos.y,this.width,this.height);
   rectMode(CENTER);
   pop(); 




 }



 

}