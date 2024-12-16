const fname = " yo yo kid";
const lName = "kio kio kid";
const sum = "First Name" + fname + "Last Name" + lName;
console.log(sum);

// templates string
console.log(`${fname} ${lName} `);

const myInfo1 = {
  name: "sakib",
  age: 25,
  address: "dhaka",
  sName: "katappa",
  sBari: "B.Baria",
  subject: ["bangla", "math", "english"],
};

const sentence = `My Name  is ${
  myInfo1.name
}. My course is ${myInfo1.subject.map((sub) => sub)}`;
console.log(sentence)