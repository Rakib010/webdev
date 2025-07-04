const addToLocalStorage = () => {
  const idInput = document.querySelector("#storage-id");
  const valueInput = document.querySelector("#storage-value");

  const id = idInput.value;
  const value = valueInput.value;

  // add

  if (id && value) {
    localStorage.setItem(id, value);
  }

  idInput.value = "";
  valueInput.value = "";
};

localStorage.setItem("friends", JSON.stringify([1, 2, 3, 4]));
