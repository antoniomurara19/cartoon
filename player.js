export class Player {
    constructor(game){
        this.game = game
        this.width = 50
        this.height = 170
        this.x = 0
        this.weight = 1
        this.vy = 0
        this.y = this.game.height - this.height
        this.image = document.getElementById('player')
        this.speed = 0
        this.maxSpeed = 10
    }
    update(input){
        // MOVIMENTO HORIZONTAL
        this.x += this.speed
        if (input.includes('ArrowRight'))this.speed = this.maxSpeed
        else if (input.includes('ArrowLeft'))this.speed = - this.maxSpeed
        else this.speed = 0
        if(this.x < 0) this.x = 0
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width
        // MOVIMENTO VERTICAL
        this.y += this.vy
        if(input.includes('ArrowUp') && this.onGround()) this.vy -= 10
        this.y += this.vy
        if(!this.onGround()) this.vy += this.weight
        else this.vy = 0
    }
    draw(context){
        context.drawImage(this.image, 49, 52, 30, 80, this.x, this.y, this.width, this.height)
    }
    onGround(){
        return this.y >= this.game.height - this.height
    }
}