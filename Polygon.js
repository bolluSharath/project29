class poly{

    constructor(x, y, width,height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }
    
        this.image=loadImage("polygon.png")        
        this.body = Bodies.rectangle(x,y, width,height, options);
        this.width=width;
        this.height=height;

        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(2);
        fill("yellow");
        
        image(this.image,pos.x, pos.y, this.width,this.height);

    }
}