const allLi = document.getElementsByTagName("li");

const allTitle = document.getElementsByClassName("section-title");
console.log(allTitle);

const secondSection = document.getElementById("second-section");
secondSection.style.color = "violet";

//
const secondList = document.getElementById("second-list");
const li = document.createElement("li");
li.innerText = "Add new element";
secondList.appendChild(li);

//
const main = document.getElementById("main");
const section = document.createElement("section");
section.innerHTML = `
<h1> My dynamic section</h1>
<p> extra text</p>
<ul>
<li>first item</li>
<li>second item</li>
</ul>
`;
main.appendChild(section);
