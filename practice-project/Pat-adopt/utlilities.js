// sort by price
// save/store currently fetched pets data
let storeDate = [];

// loading spinner
const loadSpinner = (show) => {
  const spinner = document.getElementById("loader");

  if (show) {
    spinner.classList.remove("hidden");
    document.querySelector("#all-Pets").innerHTML = "";
  } else {
    spinner.classList.add("hidden");
  }
};

// remove active btn style
const removeActiveBtn = () => {
  const btnAll = document.querySelectorAll(".category-btn");
  for (btn of btnAll) {
    btn.classList.remove(
      "bg-emerald-100",
      "rounded-full",
      "border-teal-800",
      "border-2"
    );
  }
  btn.classList.add("rounded-xl");
};
// add active class
const addActiveClass = (category) => {
  const activeBtn = document.getElementById(`btn-${category}`);
  activeBtn.classList.remove("rounded-xl");
  activeBtn.classList.add(
    "bg-emerald-100",
    "rounded-full",
    "border-teal-800",
    "border-2"
  );
};

// sort data by price
const sort = () => {
  loadSpinner(true);
  //   console.log(storeDate);
  const sortDate = storeDate.sort((a, b) => b.price - a.price);
  setTimeout(() => {
    displayLoadAllPets(sortDate);
    loadSpinner(false);
  }, 500);
};
