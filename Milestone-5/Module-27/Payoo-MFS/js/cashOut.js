document.getElementById("casOut").addEventListener("click", function (event) {
  event.preventDefault();

  //   console.log("clicked");

  const casheoutMoneyInput =
    document.getElementById("casheoutMoneyInput").value;

  const pinNumberInput = document.getElementById("pinNumberInput").value;

  //   console.log(casheoutMoneyInput, pinNumberInput);

  if (pinNumberInput === "1234") {
    const balance = document.getElementById("balance").innerText;
    const cashOut = parseInt(casheoutMoneyInput);
    const balanceNumber = parseInt(balance);
    const newBalance = balanceNumber - cashOut;
    document.getElementById("balance").innerText = newBalance;
  } else {
    alert("Failed to cash out, please try again later");
  }
});
