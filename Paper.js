class Paper {
    constructor(x, y, radius) {
        var options = {
            'isStatic' : false, 
            'restitution' : 0.3, 
            'friction' : 0.5, 
            'density' : 1.2
        }
    
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("gray");
        ellipse(0, 0, this.r, this.r);
        pop();

    }
};