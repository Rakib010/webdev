document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFiledValue("cash-out-input");
    const pinNumber = getInputFiledValue("input-cashout-pin");

    if (isNaN(cashOut)) {
      alert("Failed to add money");
      return;
    }

    //wrong way to verify
    if (pinNumber === 1234) {
      const balance = getTextFieldValue("main-balance");

      if (cashOut > balance) {
        alert("you do not have enough money to cash out");
        return;
      }

      const newBalance = balance - cashOut;
      document.getElementById("main-balance").innerText = newBalance;

      //add to transaction history

      /*const p = document.createElement("p");
      p.innerText = `Cash Out :${cashOut} Tk. New Balance: ${newBalance}`;

      //should be a common function
      document.getElementById("transaction-container").appendChild(p); */

      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
            <h4 class='text-xl font-bold'\>cash out</h4>
            <p>${cashOut} withdraw. New Balance ${newBalance}</p>
      `;
      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to cash out the money");
    }
  });
