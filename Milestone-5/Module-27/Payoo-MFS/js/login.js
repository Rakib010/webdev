//

document.getElementById("logInBtn").addEventListener("click", function (event) {
  event.preventDefault(); //

  const phnNumber = document.getElementById("phnNumber").value;
  const pinNumber = document.getElementById("pinNumber").value;

  // console.log(phnNumber, pinNumber);

  if ((phnNumber === "5") & (pinNumber === "1234")) {
    console.log("You are logged in");
    window.location.href = '../html/home.html'
  } else {
    alert("wrong phone number or pin ");
  }


});
