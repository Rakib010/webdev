function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let check of name) {
    if (!isNaN(check)) {
      return true;
    }
  }
  return false;
}

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName("e1mu3 "));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));
