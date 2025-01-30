//global variable
let cardCount = 1;
let tPrice = 0;

const totalPrice = document.querySelector("#total-price");
const finalTotal = document.getElementById("finalTotal");

function addToCart(element) {
  const priceElement = element.parentElement.querySelector("p").innerText;
  const nameElement = element.parentElement.querySelector("h2").innerHTML;
  totalPriceShow(priceElement);
  createElementValue(`${nameElement} ${priceElement}`);
}
function totalPriceShow(value) {
  tPrice = parseInt(tPrice) + parseFloat(value);
  totalPrice.innerText = tPrice;
  promoCodeApply(tPrice);
}

function promoCodeApply(tPrice) {
  console.log("click");
  const discountInfo = document.getElementById("discount-info");
  const couponCode =
    document.getElementById(
      "coupon-code"
    ).value; /*couponCode === "SEL200" &&  */

  if (tPrice >= 200) {
    const discountPrice = tPrice * 0.2;
    discountInfo.innerText = discountPrice.toFixed(2);
    const totalCost = tPrice - discountPrice;
    finalTotal.innerText = totalCost;
  } /* else {
    alert("Purchase 200 $ discount up to 20%");
  } */
}

function createElementValue(pName) {
  const selectedItems = document.getElementById("selected-items");
  const p = document.createElement("p");
  p.classList.add("pt-3");
  p.innerHTML = `
   ${cardCount++}. ${pName} 
  `;
  selectedItems.appendChild(p);
}

document
  .getElementById("make-purchase-btn")
  .addEventListener("click", function () {
    if (tPrice > 0) {
      document.getElementById("my_modal_3").showModal();
    }
  });

/* document.getElementById("go-home").addEventListener("click", function () {
  document.getElementById("my_modal_3").close();
  document.getElementById("go-home").innerHTML = "";
}); */
