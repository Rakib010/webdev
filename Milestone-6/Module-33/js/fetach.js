/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) //.json is not similar but close to JSON.parse
  .then((json) => console.log(json)); */

// response ekta parameter hisebe nicchi
const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
   // converts the data to js object
  .then((response) => response.json())
  // display the js object
  .then((json) => console.log(json));

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

