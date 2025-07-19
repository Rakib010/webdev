// regular function
function info() {
  return "ki chai....?";
}
console.log(info());

// arrow
const inf01 = () => "ki chai...?";
console.log(inf01());
// arrow function 1 line code likhle return automatic hoye jay.
const info2 = (a, b) => a * b;
console.log(info2(2, 3));
// arrow function multi line code hoyle return korte hoy like regular function
const add = (x, y) => {
  const sum = x + y;
  const multi = x * y;
  return sum + multi;
};
console.log(add(4, 5));

// default parameter
function defaultValue(x, y = 2) {
  return x + y;
}
console.log(defaultValue(3));

//default parameter using arrow function
const defaultValue1 = (x = 0, y = 3) => x + y;
console.log(defaultValue1(3));
