// setTimeout(function, milliseconds) ->Executes a function, after waiting a specified number of milliseconds.
// ekta function ke executes korbe, jeto millisecond dibo tar por excute hobe.
// setInterval(function, milliseconds) -> Same as setTimeout(), but repeats the execution of the function continuously.

setTimeout(() => {
  //   console.log(2);
}, 5000);

let num = 0;
const interId = setInterval(() => {
  if (num > 6) {
    clearInterval(interId);
  }
  console.log(num++);
}, 2000);
