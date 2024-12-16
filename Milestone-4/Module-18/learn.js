//Comparison, if,else, nested if else,

let bPrice = 500;

if (bprice < 800) {
  console.log("paisi food");
} else {
  console.log("Nope");
}

const salary = 25000;
const isBcs = true;
const height = 61;
hasCar = false;

if (salary > 20000 && height > 66) {
  console.log("Parbe");
} else {
  console.log("parbe na");
}

if (salary > 23000 || height > 72 || isBcs == true) {
  console.log("baba kobul");
} else {
  console.log("tui mokbul");
}

// Complex condition

if ((salary > 25000 && hasCar == true) || isBcs == true) {
  console.log("raji");
} else {
  console.log("raji na");
}

//multi level

const price = 3000;

if (price >= 5000) {
  // 10% discount
  const discount = (price * 10) / 100;
  console.log(discount);
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price > 2500) {
  // 5% discount
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log("price");
}

//  Nested if else

const money = 500;
if (money > 30) {
  console.log("rich");
} else {
  if (money > 100) {
    console.log("gorib ba rich");
  } else {
    if (money > 0) {
      console.log("kola kha");
    } else {
      console.log("tui bondhu na");
    }
  }
}

// Ternary operator -> condition ? do something when true : do something when false
// const age = 19;
// age >= 18 ? console.log('vote de'): console.log("ghuma")

let price = 500;
const isLeader = false;

if (isLeader === true) {
  price = 0;
} else {
  price = price * 2;
}
console.log(price);

price = isLeader === true ? 0 : price + 100;

// Advanced ternary

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 100;
}

price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 100;

const isLeader = true;

if (isLeader) {
  console.log("bhai asche");
} else {
  console.log("ashe nai");
}

const isLeader = false;

if (!isLeader) {
  console.log("vag");
} else {
  console.log("dara");
}
