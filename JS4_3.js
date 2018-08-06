//lesson 4
let Vehicle= require(`./JS4_1`);

class Truck extends Vehicle {
    constructor(carModel,carYear,maxSpeed){
        super(carModel,carYear,maxSpeed);
        this.type = `truck`;
    }

    transportContainer() {
        console.log(`I am starting transporting a heavy container`);

    }
    
    static transportRemind() {
        console.log (`Please make sure you have an additional driver\`s license category and can transport containers with weight more than 1000 kg `);
    }
    displaylayInfo(){
        console.log (`${this.type};
        ${this.model};
        Max Speed = ${this.maxSpeed}`);//4.Override method of father’s class.
    }
}

let bigtruck = new Truck (`BigTruck`,2000,150);
bigtruck.displaylayInfo();//show info about bigtrack
bigtruck.transportContainer();//show message `I am starting transporting heavy container`

Truck.transportRemind();//2. Add static method to one class, try to call it and investigate output
