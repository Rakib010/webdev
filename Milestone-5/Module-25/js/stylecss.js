const sections = document.querySelectorAll("section");

for (const section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "8px";
  section.style.borderRadius = "15px";
}

/* const placesContainer = document.getElementById("section");
placesContainer.classList.add("");
placesContainer.classList.remove(""); */

const placesContainer = document.getElementById("places-container");
console.log(placesContainer);

const placesUl = document.querySelector("#places-container ul");
console.log(placesUl);

// dynamic add new element
// where to add
const li = document.createElement("li");
//what do be added
li.innerText = "dynamic add";
// console.log(li);
//add the child
placesUl.appendChild(li);

//
const liNew = document.createElement("liNew");
liNew.innerText = "dada paisi";
placesUl.appendChild(liNew);

const mainContainer = document.getElementById("main-container");

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Hello Learner";
section.appendChild(h1);

const ul = document.createElement("ul");
const li = document.createElement("li");
li.innerText = "biryan";
ul.appendChild(li);

section.appendChild(ul);
mainContainer.appendChild(section);

//set innerHtml directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = ` <h1> My Dress section</h1>
<ul>
  <li>T-shirt</li>
  <li>Yo Yo</li>
</ul>`;
mainContainer.appendChild(section);

//
