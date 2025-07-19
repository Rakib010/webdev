const colors = ["red", "blue", "green", "yellow", "orange"];

for (let i = colors.length - 1; i >= 0; i--) {
  //   console.log(colors[i]);
}

let rev = [];
for (const co of colors) {
  rev.unshift(co);
}
// console.log(rev);

/* Write a JavaScript code to get the even numbers from an array using any looping technique. */
const numbers = [12, 98, 5, 41, 23, 78, 46];

for (const num of numbers) {
  if (num % 2 == 0) {
    // console.log(num);
  }
}

/* Use a for...of loop to concatenate all the elements of an array into a single string. */

var Name = ["Tom", "Tim", "Tin", "Tik"];
let str = "";
for (const yah of Name) {
  str += yah;
  /* str += yah + " ";
  str = str.trim(); */
}

// console.log(str);

/* Reverse the words of a sentence. Only the position of the word will be reversed. check out the output */

const statement = "I am a hard working person";

let st = statement.split(" ");
const a = st.reverse();
const b = a.join(" ");
console.log(b);
