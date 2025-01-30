const student = {
  name: "sakib khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["apu", "Raaz", "Salamn", "aamir"],
  act: function () {
    console.log("kopa");
  },
  movies: ({ name: "no. 1", year: 2025 }, { name: "king khan", year: 2018 }),
  car: {
    brand: "tesla",
    price: 50000000,
    made: 2025,
    manufacturer: {
      name: "tesia",
      ceo: "elon masl",
      country: "usa",
    },
  },
};

// console.log(student);
// console.log(student.friends);
console.log(student.car);
console.log(student.movies);
