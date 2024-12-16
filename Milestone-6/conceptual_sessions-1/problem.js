const students = [
  {
    name: "mehedy bro",
    email: "mehedy@gamil.com",
    avg: 56,
    fiftyPercent: true,
  },
  { name: "rokib bro", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
  { name: "sakib bro", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
  { name: "sojib bro", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
  { name: "sunny bro", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
  { name: "saki bro", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
  {
    name: "jackie bro",
    email: "jackie@gamil.com",
    avg: 57,
    fiftyPercent: true,
  },
];

// scic = avg = 50 , 50% = true

/* const scic = students.filter(
  (person) => person.avg >= 48 && person.fiftyPercent === true
);
console.log(scic);
 */

const findScic = (students) => {
  const scic = students.filter(
    (person) => person.avg >= 48 && person.fiftyPercent === true
  );
  const names = scic.map((p) => p.name);
  return names;
};
// console.log(findScic(students));

/* const findSCIC = (students) =>
  students
    .filter((person) => person.avg >= 48 && person.fiftyPercent)
    .map((p) => p.name);

const results = findSCIC(students);
console.log(results);
 */

const polapain = [
  { Name: "Abul", job: "sorkari", salary: 17000 },
  { Name: "Babul", job: "besorkari", salary: 25000 },
  { Name: "Kabul", job: "sorkari", salary: 21000 },
  { Name: "Habul", job: "besorkari", salary: 47000 },
  { Name: "Jabul", job: "sorkari", salary: 23000 },
  { Name: "Mabul", job: "besorkari", salary: 55000 },
];

const jamai = polapain.filter(
  (pola) =>
    (pola.job === "sorkari" && pola.salary >= 20000) ||
    (pola.job === "besorkari" && pola.salary >= 40000)
);
console.log(jamai);

const lottery = Math.floor(Math.random() * jamai.length);
console.log(lottery);
console.log(jamai[lottery].Name);
