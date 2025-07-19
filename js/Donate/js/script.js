// Blog to Home button
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "question.html";
});

// event listeners for the buttons parent
// document.getElementById("donate-div").addEventListener("click", function () {
//    console.log('yo clicked')
// });

document.getElementById("my_modal_5").close();
// event listeners for the buttons
document.getElementById("donate-btn1").addEventListener("click", function () {
  handleDonation("input", "add-taka", "h2-tag");
});

document.getElementById("donate-btn2").addEventListener("click", function () {
  handleDonation("input2", "add-taka2", "h2-tag2");

  // document.getElementById("my_modal_5").showModal();
});

document.getElementById("donate-btn3").addEventListener("click", function () {
  handleDonation("input3", "add-taka3", "h2-tag3");

  // document.getElementById("my_modal_5").showModal();
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
