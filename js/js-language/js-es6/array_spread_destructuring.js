//regular array
const arr = [1, 2, 4, 5];
const arr1 = arr;
console.log(arr1);
arr.push(10);
console.log(arr1);
arr.push(50);
console.log(arr);
console.log(arr1);

// spread operator by array
const array1 = [1, 2, 3];
const array2 = [...array1];
array1.push(8);
array2.push(10);

/* for (let item of array1) {
  array2.push(item);
} */
console.log(array1);
console.log(array2);

// destructuring array hocche
// part by part alada kore jay
// when using destructuring always maintenance sequence 
const names = ["abdul dadd", "kuddus mia", "dada bhai"];

const [x, y, z] = names;
console.log(x, y, z);
