class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB;
        this.ROPE = Constraint.create(options);
        World.add(world, this.ROPE);
    }
    fly() {
        this.ROPE.bodyA = null;
    }
    display(){
        if(this.ROPE.bodyA) {
        var pointA = this.ROPE.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}