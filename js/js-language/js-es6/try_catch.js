function checkAge() {
  const age = document.getElementById("age").value;
  const errorTag = document.getElementById("error");
  try {
    const ageText = parseInt(age);
    if (isNaN(ageText)) {
      throw "please enter a number";
    } else if (ageText < 18) {
      throw " chid not allowed";
    }
    errorTag.innerHTML = "";
  } catch (err) {
    // console.log("Error", err);
    errorTag.innerHTML = `Error ${err}`;
  } finally {
    console.log("All done inside try catch");
  }
}
