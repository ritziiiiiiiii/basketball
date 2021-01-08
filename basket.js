class Basket{
    constructor(){
        this.body=loadImage("sprites/basket.png")
        var option = {
            isStatic: true
        }
        this.rect=Bodies.rectangle(displayWidth/2, displayHeight/2-200, 300, 300, option)
        this.width = 300
        this.height = 300
        this.x=displayWidth/2
        this.y=displayHeight/2-200
        World.add(world, this.rect)
    }

    display(){
        push()
        translate(this.rect.position.x, this.rect.position.y)
        imageMode(CENTER)
        image(this.body,0,0,this.width, this.height)
        pop()
    }
}