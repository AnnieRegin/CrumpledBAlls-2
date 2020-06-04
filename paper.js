class Paper{
    constructor(x,y,radius){
        var options={
           isStatic:false,
            restitution:0.3,
           friction:1,
            density:1.2
    
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,(this.radius-20)/2,options);
        
    
        this.image=loadImage("paper.png")
    
       
        
        World.add(world,this.body);
    
    }
    display(){
        var pos=this.body.position;
       push ();
       translate(pos.x,pos.y);
     // ellipseMode(RADIUS);
      // fill (255,0,255);
        //ellipse(0,0,this.radius,this.radius);
         
       imageMode(CENTER)
       image(this.image,0,0,this.radius,this.radius)
        pop ();
    }
    }

