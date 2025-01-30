// show the cash out form

document.getElementById("show-cash-out").addEventListener("click", function () {
  document.getElementById("cash-out-form").classList.remove("hidden");

  // hide the add money form
  document.getElementById("add-money-from").classList.add("hidden");
});

document
  .getElementById("show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-from").classList.remove("hidden");

    document.getElementById("cash-out-form").classList.add("hidden");
  });
