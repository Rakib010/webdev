//
console.log(1);
console.log(2);
/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); */

/* setTimeout(() => {
  console.log("lazy");
}, 1000);
console.log(4); */
function doSomething() {
  console.log(3);
}

// promise

const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
myLoader()
  .then((data) => console.log("resolved data", data))
  .catch((err) => console.log("rejected with value", err));

// data fetch
fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// another way
async function loadData() {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}
loadData();

// Buttons

function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  // console.log('Regular way')
}

// async Await
async function asyncAwait() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  // console.log('asyncAwait')
}

//async Await Arrow

const asyncAwaitArrow = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  // console.log('using arrow')
};

// try Catch

const tryCatch = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};


