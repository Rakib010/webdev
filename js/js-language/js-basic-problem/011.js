function calculateMoney(number) {
  let ticket = 120;
  let sCost = 500;
  let stap = 8 * 50;
  if (number > 0) {
    let totalAmount = number * ticket - (sCost + stap);
    return totalAmount;
  } else {
    return "Invalid Number!";
  }
}
const number = -130;
const ticket = calculateMoney(number);
console.log(ticket);
