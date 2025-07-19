
function handleDonation(inputId, addTakaId, h2TagId) {
  const input = parseFloat(document.getElementById(inputId).value);
  const addTaka = parseFloat(document.getElementById(addTakaId).innerText);

  if (input <= 0 || isNaN(input)) {
    alert("Invalid Donation amount");
    return;
  }
  document.getElementById("my_modal_5").showModal();

  const newBalance = input + addTaka;
  document.getElementById(addTakaId).innerText = newBalance;

  const lessAmount = parseFloat(
    document.getElementById("less-amount").innerText
  );

  if (lessAmount < input) {
    alert("Invalid Donation amount");
    return;
  }

  const mainBalance = lessAmount - input;
  document.getElementById("less-amount").innerText = mainBalance;

  // Add history
  const heading = document.getElementById(h2TagId).innerText;
  const historyItem = document.createElement("div");
  historyItem.className = "p-4 rounded-lg shadow-md border-2 mt-5 mb-5";

  historyItem.innerHTML = `
    <p class="font-bold">${input} Taka is donated for ${heading}</p>
    <p>Date: ${new Date().toLocaleString()}</p>
  `;

  document.getElementById("history-items").appendChild(historyItem);
}
