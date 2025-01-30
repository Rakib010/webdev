document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("add-money-input").value;
    const inputPin = document.getElementById("input-pin").value;

    if (inputPin == "123456") {
      const mainBalance = document.getElementById("main-balance").innerText;
      const newBalance = parseInt(addMoney) + parseInt(mainBalance);

      document.getElementById("main-balance").innerText = newBalance;
      
    } else {
      alert("Wrong password");
    }
  });
