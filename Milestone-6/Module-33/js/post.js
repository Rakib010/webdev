function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

/* 
1. get the container element where you want to add the new elements
2. create child elements
3. set innerText or innerHTML
4. appendChild

 */

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



