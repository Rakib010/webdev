function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let sum = 0;
  let saving;

  for (let pay of arr) {
    if (pay >= 3000) {
      let Tax = (pay * 20) / 100;
      sum += pay - Tax;
    } else {
      sum += pay;
    }
  }
  saving = sum - livingCost;
  let res = saving >= 0 ? saving : "earn more";
  return res;
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
