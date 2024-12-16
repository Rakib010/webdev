//scop
function add(a, b) {
  const total = a + b;
  if (b > 5) {
    const sum = 25 + a + b;
  } else {
    const sum = 5 + a + b;
    var current = sum;
  }
  console.log(current);
  return total;
}
// console.log(a,b);
// console.log(total);
add(5, 3);

//hoisting
// print5();
console.log(print10);
print10();
for (let i = 0; i < 5; i++) {
  // console.log(i);
}
// console.log('outside', i);

function print5() {
  console.log("inside print5", 5);
}
var print10 = function () {
  console.log("inside print10", 10);
};
