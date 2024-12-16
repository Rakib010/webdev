// console.log("Learn basic DOm");

const liCollection = document.getElementsByTagName("li");
for (const li of liCollection) {
  //   console.log(li.innerText);
}

const allHeading = document.getElementsByTagName("h1");
for (const h1 of allHeading) {
  //   console.log(h1.innerText);
}

const Places = document.getElementsByClassName("places");
for (const places of Places) {
  //   console.log(places.innerText);
}

const jTitle = document.getElementById("j-title");
// jTitle.innerText = "Learn basic Js change before name";
// jTitle.style.color = 'red'
/* jTitle.getAttribute("class");
jTitle.classList;
jTitle.classList.add("class-bg");
jTitle.classList.remove; */
jTitle.setAttribute("title", "tooltip set by js");

document.getElementsByClassName("baba-container");


//
/* const someLi = document.querySelectorAll(".place-container li");
for (const li of someLi) {
//   console.log(li.innerText);
}
const somLi = document.querySelector(".place-container li");
for (const li of somLi) {
//   console.log(li.innerText);
} */

// document.getElementById