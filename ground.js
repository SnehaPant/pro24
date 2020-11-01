class ground{
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(600,400,1200,20,option)
        World.add(world,this.body)
      
    }
    display(){
        var p
        p=this.body.position;
        rectMode(CENTER)
        fill('brown')
        rect(p.x,p.y,1200,20)
    }
    
    }