// data access

const data = [{ id: 1, name: "abdul", address: "dhaka" }];

console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "mobile", price: 65000 },
    { id: 2, name: "laptop", price: 16500 },
  ],
};
//second product price;
console.log(products.data[1].price);

const user = {
  id: 5001,
  name: "shoriful",
  address: {
    street: {
      first: "54/1 uttor side",
      second: "poribag er goli",
      third: "no dorai",
    },
    city: "dhaka",
  },
};

console.log(user.address.street.second);

const user2 = {
  id: 5001,
  name: "shori",
  address: {
    city: "dhaka",
    country: "bangladesh",
  },
};
console.log(user2.address.country);


