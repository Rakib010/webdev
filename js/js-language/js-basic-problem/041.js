const person = {
  name: "kolimuddin",
  birthYear: 1999,
  siteName: "google",
};
const person1 = {
  name: "rahat",
  birthYear: 2002,
  siteName: "Facebook",
};
const person2 = {
  name: "toky",
  birthYear: 200,
  siteName: "Facebook",
};

function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "invalid";
  }

  let capital = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  let passStr = capital + "#" + obj.name + "@" + obj.birthYear;
  return passStr;
}
// password(person);
console.log(password(person));
console.log(password(person1));
console.log(password(person2));
console.log(password({ name: "maisha", birthYear: 2002 }));


/* for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`); */
