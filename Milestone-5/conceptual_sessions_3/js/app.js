// getting all the value

document.getElementById("calculate").addEventListener("click", function () {
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  if (income <= 0 || isNaN(income)) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
  if (income <= 0 || isNaN(software)) {
    document.getElementById("software-error").classList.remove("hidden");
    return;
  }
  if (income <= 0 || isNaN(courses)) {
    document.getElementById("courses-error").classList.remove("hidden");
    return;
  }
  if (income <= 0 || isNaN(internet)) {
    document.getElementById("internet-error").classList.remove("hidden");
    return;
  }

  const totalCost = software + courses + internet;
  const balance = income - totalCost;
  //   console.table({ totalCost, balance });

  if (totalCost > income) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  }

  document.getElementById("total-expenses").innerText = totalCost.toFixed(2);
  document.getElementById("balance").innerText = balance.toFixed(2);

  document.getElementById("results").classList.remove("hidden");

  //history

  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-1-2 border-indigo-500";
  historyItem.innerHTML = `
     <p class='text-xs text-gray-500'>${new Date().toLocaleDateString()}</p>
     <p class='text-xs text-gray-500'>Income: ${income.toFixed(2)}
     <p class='text-xs text-gray-500'>Expanse: ${totalCost.toFixed(2)}
     <p class='text-xs text-gray-500'>Balance: ${balance.toFixed(2)}
   `;

  const historyList = document.getElementById("history-list");

  historyList.insertBefore(historyItem, historyList.firstChild);
});

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const savings = parseFloat(document.getElementById("savings").value);
    // console.log(savings);

    const totalCost = software + courses + internet;
    const balance = income - totalCost;

    const percent = (savings * balance) / 100;

    const remainingBalance = balance - percent;

    document.getElementById("remaining-balance").innerText =
      remainingBalance.toFixed(2);

    document.getElementById("savings-amount").innerText = percent.toFixed(2);
  });

// history tab functionality
const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");

historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  historyTab.classList.remove("text-gray-600");
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.add("text-gray-600");

  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

// live validation for input

document.getElementById("income").addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("income").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
});
