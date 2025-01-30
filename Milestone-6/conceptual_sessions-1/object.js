const myInfo = {
  name: "sakib",
  age: 25,
  address: "dhaka",
  sName: "katappa",
  sBari: "B.Baria",
  contact: {
    phone: 256436,
    email: "katappa@gmail.com",
  },
};

/* const obj2 = myInfo;
obj2.married = false;
obj2.age = 26;
console.log(obj2);
console.log(myInfo);
 */
// spread operator
/*   */
//object destructuring
const myInfo1 = {
  name: "sakib",
  age: 25,
  address: "dhaka",
  sName: "katappa",
  sBari: "B.Baria",
  contact: {
    phone: 256436,
    email: "katappa@gmail.com",
  },
};

const { name, age, address } = myInfo1;
console.log(name, age, address);

// age:myAge like age ekta variable rakha akhn jodi age pete chay myAge die print korte hobe
const { age: myAge } = myInfo1;
console.log(myAge);

// object vitore object thakle ey vabe acces korte hobe
const { contact } = myInfo;
console.log(contact);
const { email } = contact;
console.log(email);
//  ekta object vitore r ekta object thakle dirct acces
/* const {
  contact: { email },
} = myInfo;
 */
//object access two way
// 1. dot notation
// 2. bracket notation

const car = {
  cname: "bmw",
  country: "germany",
  color: "black",
};
for (let key in car) {
  console.log(key, car[key]);
}

=