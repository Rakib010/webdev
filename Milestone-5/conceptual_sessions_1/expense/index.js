//
const insertBtn = document.getElementById("expense-insert-btn");
const expenseField = document.getElementById("expense-field");
const amountField = document.getElementById("amount-field");
const rowContainer = document.getElementById("row-container");
const expenseSpan = document.getElementById("expense-amount");

insertBtn.addEventListener("click", function () {
  const expense = expenseField.value;
  const amount = Number(amountField.value);
  // console.log(expense,amount)

  const row = `
    <div class="flex justify-between data-amount=${amount}">
        <p>${expense}</p>
        <p>${amount}</p>
      </div>`;

  let expenseAmount = Number(expenseSpan.innerText);
  expenseAmount += amount;
  expenseSpan.innerText = expenseAmount;
  rowContainer.innerHTML += row;
});
