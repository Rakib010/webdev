//setAttribute() // getAttribute() // removeAttribute

const myBtn = document.getElementById("btn");
myBtn.setAttribute = ("class", "btn btn-primary");
// myBtn.setAttribute("disabled", true);

const get = document.getElementById("btn");
const getAttribute = get.getAttribute("title");
console.log(getAttribute);

myBtn.removeAttribute("disabled");

//Creating an element and append
//  Add class name  || classList[add(),remove()]
//  append Child vs append -> append ekta value add kore
// append chiled ek ba ekadikh value add korte pare & text add kora jay
//  remove() or remove Child()

const container2 = document.querySelector(".container2");
const p = document.createElement("p");
p.innerText = "I'm create by js dynamically ";
container2.appendChild(p);
console.log(p);
p.classList.add("ptag"); // ey vabe class name add kora jay
p.classList.remove("ptag"); // ey vabe class name remove kora jay

// remove -> direct dom the remove kore dei 
// removeChild -> parent access thakte hobe than child remove korte hobe.
// container2.remove();
// container2.removeChild(p);
