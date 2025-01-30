function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

//
function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  console.log(data);
}

function loaduser2() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayUser2(data));
}

function displayUser2(data) {
  //   console.log(data);
  const ul = document.getElementById("users-list");
  for (const user of data) {
    //  console.log(user.title);
    const li = document.createElement("li");
    li.innerText = user.title;
    ul.appendChild(li);
  }
}

function displayPost(post) {
  const postContainer = document.getElementById("post-container");
  for (const data of post) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h5>User-${data.userId} </h5>
      <h5>post:${data.title}</h5>
      <p>Post ${data.body}</p>
     `;
    postContainer.appendChild(div);
  }
}
loadPost();

// Rest api methods

// create
function createPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// delete
function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

//patch -> update post 
function patchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
