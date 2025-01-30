// truthy -> 'anyName',5,true,{},[]
// falsy -> '', false, null, undefined

// check truthy
let myVar = 5;
if (myVar) {
  myVar *= 5;
} else {
  myVar = 0;
}
// check falsy
let myMoney = 50;
if (!myMoney) {
  myMoney = 0;
}

// ternary operator
const money = 50;
let food = money > 100 ? "kachhi" : "cha biscuit";
console.log(food);

// number to string convert
const num1 = 52;
console.log(num1);
const str = num1.toString();
console.log(str);
const str2 = num1 + ""; // string convert shortcut
console.log(str2);

//string to number convert
const input = "560";
const inputNum = +input;
console.log(inputNum);

//shortCut way -> conditional way function using
const isActive = true;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();

// use or, || - if the left is false then right side will be executed
isActive || showUser();

// toggle boolean
isActive = !isActive;


