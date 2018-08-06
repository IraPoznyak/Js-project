//lesson 4

class Vehicle{
    constructor(carModel,carYear,maxSpeed){
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }
    displaylayInfo(){
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed :${this.maxSpeed};
        Type : ${this.type};`);
    }


}
 module.exports = Vehicle;







