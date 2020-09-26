class Dustbin {
    constructor(x,y,width,height,Img){
        var options={
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage(Img);
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop(); 
    }
    displayImg() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0, 0, this.width*2, this.height*10);
        pop(); 
    }
}