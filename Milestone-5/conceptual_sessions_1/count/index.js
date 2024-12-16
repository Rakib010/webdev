
// Read operation
const count = document.getElementById("count");
const container = document.getElementById("container");

const increasebtn = document.getElementById("increaseCount");
const decreasebtn = document.getElementById("decreaseCount");

//
document.getElementById("container").addEventListener("click", function () {
  if (increasebtn.getAttribute("disabled") === null) {
    increasebtn.setAttribute("disabled", true);
    decreasebtn.setAttribute("disabled", true);
    container.classList.add("bg-red-500");
  } else {
    increasebtn.removeAttribute("disabled");
    decreasebtn.removeAttribute("disabled");
    container.classList.remove("bg-red-500");
  }
});

document
  .getElementById("increaseCount")
  .addEventListener("click", function (event) {
    let currentCount = Number(count.innerText);
    currentCount++;
    count.innerText = currentCount;
    event.stopPropagation();
    // console.log("click plus");
  });

document
  .getElementById("decreaseCount")
  .addEventListener("click", function (event) {
    let currentCount = Number(count.innerText);
    currentCount--;
    count.innerText = currentCount;
    // console.log("click - ");
    event.stopPropagation();
  });
