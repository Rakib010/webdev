document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFiledValue("add-money-input");
    const pinNumber = getInputFiledValue("input-pin");

    if (isNaN(addMoney)) {
      alert("Failed to add money");
      return;
    }

    //wrong way to verify
    if (pinNumber === 1234) {
      const balance = getTextFieldValue("main-balance");
      const newBalance = balance + addMoney;
      document.getElementById("main-balance").innerText = newBalance;

      //add to transaction history
      const p = document.createElement("p");
      p.innerText = `Added :${addMoney} Tk. New Balance: ${newBalance}`;

      //should be a common function
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add the money");
    }
  });
