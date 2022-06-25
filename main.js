class Vehicle {
  constructor(wheelsNum, engineCapacity, color) {
    this.wheelsNum = wheelsNum;
    this.engineCapacity = engineCapacity;
    this.color = color;
  }

  static biggestEngine(array){
     array.forEach(item => {
      for (key in item){
        
      }
     });
  }

 
  printDetails() {
    return `number of wheels ${this.wheelsNum},engine capacity${this.engineCapacity},color${this.color}`;
  }
}
// const details = new Vehicle(4, 1800, "black");
// console.log(details);
class Privte extends Vehicle {
  constructor(wheelsNum, engineCapacity, color, name) {
    super(wheelsNum, engineCapacity, color);
    this.name = name;
  }
  uppercaseFirstAndLastLetter(){
    return this.name[0].toUpperCase() + this.name.substring(1,this.name.length-1) + this.name[this.name.length-1].toUpperCase();
  }
  get result(){
    return this.uppercaseFirstAndLastLetter()
  }
  printDetails() {
    return `${super.printDetails()},${this.name}`;
  }
}
const myPrivte=new Privte(21,260,"black","honda")
console.log(myPrivte);

class Truck extends Vehicle {}
class Sport extends Vehicle {}
