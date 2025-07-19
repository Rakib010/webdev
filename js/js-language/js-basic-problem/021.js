// First approach -> some problem this code 

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  let lastLetter = name[name.length - 1].toLowerCase();
  //toLocaleLowerCase()
  if (lastLetter === "a" || "y" || "i" || "e" || "o" || "u" || "w") {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
/* console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"])); */


// another approach
function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }

  let lastLetter = name.slice(-1).toLowerCase();
  let result = false;
  let checkArray = ["a", "y", "i", "e", "o", "u", "w"];

  for (let char of checkArray) {
    if (lastLetter === char) {
      result = true;
    }
  }
  return result ? "Good Name" : "Bad Name";
}

/* console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"])); */

// Another Approach
function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }

  let lastLetter = name.slice(-1).toLowerCase();
  let checkArray = ["a", "y", "i", "e", "o", "u", "w"];

  let result = checkArray.includes(lastLetter);

  return result ? "Good Name" : "Bad Name";
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
