// data fetch
function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("error happened", error));
}

// another way
const loadComments2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("data load error");
  }
};

/* const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name); */
