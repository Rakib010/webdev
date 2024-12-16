// plus
let sum = 0;
function clickMe() {
  const count = document.getElementById("count");
  sum += 1;
  count.innerText = sum;
}

const minusBtn = document
  .getElementById("minus-btn")
  .addEventListener("click", function () {
    const count = document.getElementById("count");
    sum -= 1;
    count.innerText = sum;
  });
