//
//
document.getElementById("calculate").addEventListener("click", function () {
  // get value for function
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  if (income <= 0 || isNaN(income)) {
    showError("income-error");
    return;
  }
  if (income <= 0 || isNaN(courses)) {
    showError("courses-error");
    return;
  }
  if (income <= 0 || isNaN(software)) {
    showError("software-error");
    return;
  }
  if (income <= 0 || isNaN(internet)) {
    showError("internet-error");
    return;
  }

  const totalCost = software + courses + internet;
  const balance = income - totalCost;

  if (totalCost > income) {
    showError("logic-error");
    return;
  }

  document.getElementById("total-expenses").innerText = totalCost.toFixed(2);
  document.getElementById("balance").innerText = balance.toFixed(2);

  showError("results");


  

});
