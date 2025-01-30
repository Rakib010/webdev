//object

function showInfo(info) {
  if (typeof info !== "object") {
    return "provide valid object";
  }
  return "amr name " + info.name + ", amr basa " + info.address;
}

const person = {
  name: "kib",
  address: "Dhaka",
};
const x = showInfo(person);
// console.log(x);

/* input: given an object  
 output: kib@dhaka.com */
const man = {
  name: "kib",
  address: "Dhaka",
};

function createEmail(info) {
  const result = info.name + "@" + info.address + ".com";
  return result;
}
// console.log(createEmail(man));

// job

const person1 = {
  name: "abul kashem",
  honors: 40,
  hsc: 30,
  isFFfamily: true,
};
const person2 = {
  name: "abul kashem",
  honors: 45,
  hsc: 32,
  isFFfamily: false,
};

function jobSelection(info) {
  if (typeof info !== "object") {
    return "invalid object";
  }

  let totalMarks = info.honors + info.hsc;
  if (info.isFFfamily) {
    totalMarks = totalMarks + totalMarks * 0.2;
  }
  console.log(totalMarks);
  if (info.isFFfamily && totalMarks >= 80) {
    return "Aho vatija aho";
  } else if (info.isFFfamily && totalMarks < 80) {
    return "bad luck vatiza";
  } else if (!info.isFFfamily && totalMarks >= 80) {
    return "got job";
  } else if (!info.isFFfamily && totalMarks < 80) {
    return "Ami ke tmi ke Rajakar Rajakar";
  }
  // console.log(totalMarks);
  /* if (totalMarks >= 80) {
    return "got job";
  } else {
    return "fail";
  } */
}

console.log(jobSelection(person2));
