class Vehicle {
  constructor(wheelsNum, engineCapacity, color) {
    this.wheelsNum = wheelsNum;
    this.engineCapacity = engineCapacity;
    this.color = color;
  }
  printDetails() {
    return `number of wheels ${this.wheelsNum},engine capacity${this.engineCapacity},color${this.color}`;
  }
}
// const details = new Vehicle(4, 1800, "black");
// console.log(details);
class Privte extends Vehicle {
    constructor(wheelsNum,engineCapacity,color,name){
          super(wheelsNum,engineCapacity,color)
          this.name=name;
    }
          printDetails(){
            return `${super.printDetails()},${this.name} 
          }
    }
}
// class Truck extends Vehicle{}
// class Sport extends Vehicle{}
