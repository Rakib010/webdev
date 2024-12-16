function threeMax(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}
const n1 = 23;
const n2 = 45;
const n3 = 56;
// console.log(threeMax(n1, n2, n3));

//1. Max array value
function arrMax(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      x = arr[i];
    }
  }
  return x;
}
const arr = [55, 34, 78, 90, 678, 70];
// console.log(arrMax(arr));

//2.
function arrMax(array) {
  let max = array[0];
  for (const num of array) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const array = [55, 34, 78, 90, 1120, 678, 70];
// console.log(arrMax(array));

// Min value from array
function arrMin(min) {
  let z = min[0];
  for (let i = 0; i < min.length; i++) {
    if (z > min[i]) {
      z = min[i];
    }
  }
  return z;
}
const min = [55, 2, 34, 78, 90, 678, 70];
// console.log(arrMin(min));

//multiply
function woodQuantity(chair, table, bed) {
  const perChair = 3;
  const perTable = 10;
  const perBed = 50;

  const c = chair * perChair;
  const t = table * perTable;
  const b = bed * perBed;

  return c + t + b;
}
const wood = woodQuantity(1, 1, 3);
// console.log(wood);


 