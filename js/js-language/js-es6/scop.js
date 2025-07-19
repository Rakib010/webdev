// scop three types

//global scop
let x = 5;
console.log(x);

// block scop -> let, const
if (true) {
  console.log(x);
}

// functional scop
function show() {
  console.log(x);
}

// var die variable declare korle, automatic global variable convert hoye jay. block scop thake na.
{
  var x1 = 10;
  console.log(x1);
}
console.log(x1);
// function scop e var out of scop access pai na
function show1() {
  var x = 10;
  console.log(x);
}
show1();
console.log(x);

// datatype chara variable declare korle global scop e convert hoye jay.
function show1() {
  x = 10;
  console.log(x);
}
show1();
console.log(x);


