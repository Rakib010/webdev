const petOwner = {
  name: "jon khabir",
  contact: {
    phone: "0923435",
    email: "xyz@gmail.com",
  },
  pet: {
    name: "Lofie",
    info: {
      color: "black",
      weight: "1.2kg",
    },
  },
  food: ["apple", "orange"],
};

console.log(petOwner.contact.phone);
console.log(petOwner.pet.info.color);

// optional chaining ?. hocche
//  object e address name kono property nai that's why address undefind asbe
console.log(petOwner.address);
// jodi address er vitore kisu khujte jay thkhn typeError dibe
console.log(petOwner.address.number);
// sei jonno amra optional chaining use korbo
// eykhane code kaj kortase jodi address name kono property thake tahole tar number ta dew eitai hocche optinal chaining er kaj.
console.log(petOwner.address?.number);
