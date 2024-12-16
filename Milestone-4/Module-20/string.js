const nam = "Bangla";
const num = `yoyo`;

// console.log(nam[0]);

// string is immutable -> not changeable

const school = "raj uk school";
const clg = "Raj uk school";
/* console.log(school.toLocaleUpperCase());
console.log(school); */

//string campier

if (school.toLocaleLowerCase() === clg.toLocaleLowerCase()) {
  console.log("Yo Yo");
} else {
  console.log("kio Kio");
}

// trime hocche space cut kore dei
const drink = "water";
const khai = " water ";

if (drink.trim() === khai.trim()) {
  console.log("Paisi");
} else {
  console.log("pai nai");
}

//
const address = "andorkilla";
const part = address.slice(2, 5);
console.log(part);

// split kora
const sentence = "you are a good person";
console.log(sentence.split(" "));
const sen = ["rahim", "karim", "lahim", "fahim"];
console.log(sen.join("-"));

//concat
const first = "abid";
const last = "nabid";
const full = first + " " + last;
console.log(full);

//Reverse
const dev = "I am learning web devops";

let reverse = "";
for (const letter of dev) {
  console.log(letter);
  reverse = letter + reverse;
}
 console.log(reverse);

let rev = "";
for (let i = 0; i <= dev.length; i++) {
  //   console.log(dev[i]);
  let letterr = dev[i];
  rev = letterr + rev;
}
 console.log(rev);

 // reverse shortcut

 const reversed = dev.split('').reverse().join('');
 console.log(reversed);

 