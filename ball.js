class Ball{
    constructor(){
        this.body=loadImage("sprites/basketball.png")
        var option = {
            density:0.04,
            frictionAir: 0,
            isStatic: false
        }
        this.rect=Bodies.rectangle(500, 500, 90, 190)
        this.width = 90
        this.height = 90
        World.add(world, this.rect)
    }

    display(){
        // this.rect.position.x = mouseX;
        // this.rect.position.y = mouseY;
        console.log(this.rect)
        push()
        translate(this.rect.position.x, this.rect.position.y)
        imageMode(CENTER)
        image(this.body,0,0,this.width, this.height)
        pop()
    }
}