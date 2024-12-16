document
  .getElementById("show-add-money-form")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSection("add-money-form");
  });
document
  .getElementById("show-cash-out-from")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSection("cash-out-form");
  });
document
  .getElementById("show-transactions")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSection("transaction-section");
  });
