

//let dateTimeString = Date : " + currentDateTime.toString();


// Blog to Home btn
document.getElementById("blog-btn").addEventListener("click", function () {
  // document.getElementById("blog-btn").innerText = "Home";
  window.location.href = "question.html";
});


// donate btn 1
document.getElementById("donate-btn1").addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input").value);
  const addTaka = parseFloat(document.getElementById("add-taka").innerText);

  if (input <= 0 || isNaN(input)) {
    alert("Invalid Donation amount");
    return;
  }

  const newBalance = input + addTaka;

  document.getElementById("add-taka").innerText = newBalance;

  const lessAmount = parseFloat(
    document.getElementById("less-amount").innerText
  );

  if (lessAmount < input) {
    alert("Invalid Donation amount");
    return;
  }
  const mainBalance = lessAmount - input;

  document.getElementById("less-amount").innerText = mainBalance;

  //history added
  const heading = document.getElementById("h2-tag").innerText;
  const historyItem = document.createElement("div");
  historyItem.className = "p-4 rounded-lg shadow-md border-2 mt-5 mb-5";

  historyItem.innerHTML = `
    <p class="font-bold">${input} Taka is ${heading}</p>
    <p>Date:${new Date().toLocaleString()}</p>
  
  `;
  document.getElementById("history-items").appendChild(historyItem);
});
// donate btn 2
document.getElementById("donate-btn2").addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input2").value);
  const addTaka = parseFloat(document.getElementById("add-taka2").innerText);

  if (input <= 0 || isNaN(input)) {
    alert("Invalid Donation amount");
    return;
  }
  const newBalance = input + addTaka;

  document.getElementById("add-taka2").innerText = newBalance;

  const lessAmount = parseFloat(
    document.getElementById("less-amount").innerText
  );

  const mainBalance = lessAmount - input;

  document.getElementById("less-amount").innerText = mainBalance;

  //history added
  const heading = document.getElementById("h2-tag2").innerText;
  const historyItem = document.createElement("div");
  historyItem.className = "p-4 rounded-lg shadow-md border-2 mt-5 mb-5";

  historyItem.innerHTML = `
     <p class="font-bold">${input} Taka is ${heading}</p>
     <p>Date:${new Date().toLocaleString()}</p>
   
   `;
  document.getElementById("history-items").appendChild(historyItem);
});
// donate btn 3
document.getElementById("donate-btn3").addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input3").value);
  const addTaka = parseFloat(document.getElementById("add-taka3").innerText);

  if (input <= 0 || isNaN(input)) {
    alert("Invalid Donation amount");
    return;
  }
  const newBalance = input + addTaka;

  document.getElementById("add-taka3").innerText = newBalance;

  const lessAmount = parseFloat(
    document.getElementById("less-amount").innerText
  );

  const mainBalance = lessAmount - input;

  document.getElementById("less-amount").innerText = mainBalance;

  //history added
  const heading = document.getElementById("h2-tag3").innerText;
  const historyItem = document.createElement("div");
  historyItem.className = "p-4 rounded-lg shadow-md border-2 mt-5 mb-5";

  historyItem.innerHTML = `
    <p class="font-bold">${input} Taka is Donated for ${heading}</p>
    <p>Date:${new Date().toLocaleString()}</p>
  
  `;
  document.getElementById("history-items").appendChild(historyItem);
});


// donation & History
const historyClicked = document.getElementById("history-btn");
const donation = document.getElementById("donate-div");

historyClicked.addEventListener("click", function () {
  historyClicked.classList.add("bg-[#B4F461]");

  donation.classList.remove("bg-[#B4F461]");

  cardInfo("card-info");
  cardInfo("card-info2");
  cardInfo("card-info3");

  document.getElementById("history-section").classList.remove("hidden");
});

donation.addEventListener("click", function () {
  donation.classList.add("bg-[#B4F461]");

  historyClicked.classList.remove("bg-[#B4F461]");

  cardInfo2("card-info");
  cardInfo2("card-info2");
  cardInfo2("card-info3");

  document.getElementById("history-section").classList.add("hidden");
});
