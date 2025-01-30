// get all coffees from local storage

import toast from "react-hot-toast";

const getAllFavorites = () => {
  const all = localStorage.getItem("favorite");
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};

// add a coffee to local storage
const addFavorite = (coffee) => {
  // get all previously saved coffee data
  const favorite = getAllFavorites();

  // same product double add hobe na
  const isExist = favorite.find((item) => item.id == coffee.id);
  if (isExist) return toast.error("Coffee already exists!");

  // push item localStorage
  favorite.push(coffee);
  localStorage.setItem("favorite", JSON.stringify(favorite));
  toast.success("Successfully Added!");
};

// remove a coffee from local storage
const removeFavorite = (id) => {
  const favorite = getAllFavorites();
  const reaming = favorite.filter((coffee) => coffee.id != id);
  localStorage.setItem("favorite", JSON.stringify(reaming));
  toast.success("Successfully Removed!");
};

export { addFavorite, getAllFavorites, removeFavorite };
