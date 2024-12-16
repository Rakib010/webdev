/* Task-1:
Count how many times a string has the letter a
Task-2:
Count how many times a string has the letter a or A  */

const str = "character at string";
let i = 0;
let a = 0;
while (i <= str.length) {
  if ((str[i] == "a") | "A") {
    a++;
  }
  i++;
}
console.log(a);

/* Task-3:
Check whether a string contains all the vowels a, e, i, o, u */

const str = ["a", "e", "i", "o", "u"];
let cunt = 0;
for (const i of str) {
  if (str.includes(i)) {
    cunt++;
  }
  console.log(i, cunt);
}

/* Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string. */

const str = "eXample teXt with both x and X";

let rep = str.replace(/x/g, "y");
rep = str.replace(/X/g, "Y");
// console.log(str);
console.log(rep);

/* Task-5:
Capitalize Every first Letter of each word in a String */

const str =" method returns the code of the character at a specified index in a string";

// convert string to array
let words = str.split(" ");

let cWords = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});

let sentence = cWords.join(" ");

console.log(sentence);
