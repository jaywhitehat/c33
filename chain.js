class Chain {
    constructor(bodyA,bodyB){
    var options = {
    bodyA:bodyA,
    bodyB:bodyB,    
    stiffness:0.05
    }
    this.chain = Constraint.create(options);
    World.add(myWorld,this.chain);
    }
    show(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
    
        strokeWeight(4);
        
        line (posA.x,posA.y,posB.x,posB.y);
    }
    }
