const products = [
  { id: 1, name: "hp", price: 65000 },
  { id: 2, name: "dell", price: 75000 },
  { id: 3, name: "lenovo", price: 6000 },
  { id: 4, name: "mac", price: 165000 },
];

// class
// has some properties, method
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // class methods
  play() {
    console.log(`${this.name}`);
  }
}

const result = new Person("lenovo", 20);
console.log(result);
result.play();

// inheritance
class vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("vehicle chole na ");
  }
}

class Bus extends vehicle {
  constructor(name, price, seat, tickerprice) {
    super(name, price);
    this.seat = seat;
    this.tickerprice = tickerprice;
  }
}

class Truck extends vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}

// this

class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //method
  sleep() {
    console.log(`sleeping ${this.name}`);
  }
  activity() {
    this.sleep();
  }
}

//class theke object convert
const kodom = new Persons("kodom ali", 21);
console.log(kodom);
kodom.sleep();
