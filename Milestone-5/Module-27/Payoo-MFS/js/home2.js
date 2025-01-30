document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();

  const AddMoneyInput = document.getElementById("AddMoneyInput").value;
  const pinNumberInput = document.getElementById("pinNumberInput").value;

  if (pinNumberInput === "1234") {
    const balance = document.getElementById("pinNumberInput").innerText;

    const balanceNumber = parseFloat(balance);
    const AddMoneyNumber = parseFloat(AddMoneyInput);

    const newBalance = balanceNumber + AddMoneyNumber;

    document.getElementById("balance").innerText = newBalance;
  } else {
    alert("Filed to add money");
  }
});
