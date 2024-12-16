// ek jon er income & cost ber kora hoyse

function calculateSaving(money) {
  if (typeof money !== "number") {
    return "invalid input";
  }

  const hRent = 500;
  const food = 300;
  const personal = 200;
  const tcost = hRent + food + personal;

  if (tcost > money) {
    return "Earn More";
  }

  const saving = money - tcost;
  return saving;
}
const result = calculateSaving(500);
// console.log(result);

// ekta array te koyta boolean ashe count koro

function countBoolean(arr) {
  if (!Array.isArray(arr)) {
    return "please provide valid array";
  }
  let count = 0;
  for (let item of arr) {
    if (typeof item === "boolean") {
      count++;
    }
  }
  return count;
}
const arr = [2, false, true, true, "hello", { name: "kib" }];
const output = countBoolean(arr);
// console.log(output);

