//lesson 4
let  Vehicle = require(`./JS4_1`);

class Car extends Vehicle {
    constructor (carModel,carYear,maxSpeed){
        super(carModel,carYear,maxSpeed);
        this.type = `car`;
    }

    transportPeople(){
        console.log(`I am starting transporting passengers`);
    }

    displaylayInfo(){
        super.displaylayInfo()
        console.log (`Have a nice trip`);//4.Override method of father’s class.
    }
}

let lada = new Car (`Kalina`,2011,220);
lada.displaylayInfo();//show info about lada
lada.transportPeople();//show message `I am starting transporting passengers` 