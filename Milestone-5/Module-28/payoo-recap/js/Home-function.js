//
function getInputFiledValue(id) {
  const inputValue = document.getElementById(id).value;
  return parseInt(inputValue);
}

function getTextFieldValue(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseInt(textValue);
  return textNumber;
}

function showSection(id) {
  // hide all the section
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");

  //show the section
  document.getElementById(id).classList.remove('hidden');


}
