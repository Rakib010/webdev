const shop = {
  owner: "alia",
  address: {
    street: "kochukhet",
    city: "ranbir",
    country: "BD",
  },
  products: ["laptop", "phone", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

// object to json convert
// stringify -> die js er jekono value ke JSON e conver kora jay
const shopJson = JSON.stringify(shop);
console.log(shopJson);

// json to object convert
// parse -> die JSON value ke object, array etc convert kora jay
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
