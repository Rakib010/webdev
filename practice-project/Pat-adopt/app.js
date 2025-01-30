// category fetch
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await res.json();
  //   console.log(data.categories);
  displayCategories(data.categories);
};
// load all pets
const loadAllPets = async () => {
  loadSpinner(true);
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await res.json();
  setTimeout(() => {
    displayLoadAllPets(data.pets);
    storeDate = data.pets;
    loadSpinner(false);
  }, 2000);
};
// load category btn
const loadPetByCategory = async (categoryBtn) => {
  // remove active class if exist
  removeActiveBtn();
  // active btn
  addActiveClass(categoryBtn);

  loadSpinner(true);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${categoryBtn}`
  );
  const data = await res.json();
  setTimeout(() => {
    displayLoadAllPets(data.data);
    storeDate = data.data;
    loadSpinner(false);
  }, 2000);
};
// load details btn
const loadPetByDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${id}`
  );
  const data = await res.json();
  displayPetsDetails(data.petData);
};
// display details btn
const displayPetsDetails = (petData) => {
  //   console.log(petData);
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
  <div class="p-5 border rounded-lg">
        <img
        class="rounded-lg w-full"
        src=" ${petData.image}"
        alt="Pet"
      />
      <p class="text-2xl font-bold mt-2">${
        petData.pet_name || " Not available"
      }</p>
      <div class="flex items-center justify-between ">
        <div>
          <div class="flex space-x-2 items-center mt-4">
            <i class="bx bx-grid-alt"></i>
            <p>Breed: ${petData.breed || " Not available"}</p>
          </div>
          <div class="flex space-x-2 items-center">
            <i class="fa-solid fa-mercury"></i>
            <p>Gender: ${petData.gender || " Not available"}</p>
          </div>
           <div class="flex space-x-2 items-center">
            <i class="fa-solid fa-mercury"></i>
            <p>Vaccinated status: ${
              petData.vaccinated_status || " Not available"
            }</p>
          </div>
           </div>
           <div>
            <div class="flex space-x-2 items-center">
              <i class="fa-regular fa-calendar"></i>
              <p>Birth: ${petData.date_of_birth || " Not available"}</p>
            </div>
            <div class="flex space-x-2 items-center">
              <i class="fa-solid fa-dollar-sign"></i>
              <p>Price: ${petData.price || " Not available"}$</p>
            </div>
           </div>
      </div>
        <hr class="border my-4" />
          <p class="font-bold">Details Information</p>
          <p>${petData.pet_details}</p> 
    </div> 
 `;
  my_modal_4.showModal();
};

// display load all pets
const displayLoadAllPets = (pets) => {
  const allPetsContainer = document.querySelector("#all-Pets");
  allPetsContainer.innerHTML = "";
  pets.forEach((pet) => {
    // console.log(pet);
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "flex-col",
      "gap-2",
      "p-4",
      "border",
      "rounded-xl",
      "font-semibold"
    );
    div.innerHTML = `
         <img class="h-36 w-full rounded-lg object-cover"src="${
           pet.image
         }" alt="Pet" />
          <p class="text-2xl mt-2"> ${
            pet.pet_name ? pet.pet_name : "Not Available"
          }</p>
              <div class="flex space-x-2 items-center mt-4">
                <i class="bx bx-grid-alt"></i>
                <p>Breed: ${pet.breed || "Not Available"}</p>
              </div>
              <div class="flex space-x-2 items-center">
                <i class="fa-regular fa-calendar"></i>
                <p>Birth: ${pet.date_of_birth || "Not Available"}</p>
              </div>
              <div class="flex space-x-2 items-center">
                <i class="fa-solid fa-mercury"></i>
                <p>Gender: ${pet.gender || "Not Available"}</p>
              </div>
              <div class="flex space-x-2 items-center">
                <i class="fa-solid fa-dollar-sign"></i>
                <p>Price: ${pet.price || "Not Available"}$</p>
              </div>
                <hr class="border my-4" />
              <div class="flex justify-between">
                <button class="btn"onclick="likeBtn('${pet.image}')">
                  <i class="fa-solid fa-thumbs-up"></i>
                </button>
                <button onclick="adoptModel(this)" class="btn text-[#0E7A81] font-semibold hover:bg-[#0E7A81] hover:text-white">Adopt</button>
                <button 
               class="btn text-[#0E7A81] font-semibold hover:bg-[#0E7A81] hover:text-white" 
               onclick="loadPetByDetails(${pet.petId})">
               Details
                </button>
             </div>
    `;

    allPetsContainer.appendChild(div);
  });
};
// display category btn
const displayCategories = (categories) => {
  //   console.log(categories);
  const differentCategory = document.querySelector("#different-category");
  categories.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
     <button id="btn-${item.category}" onclick = "loadPetByCategory('${item.category}')" class="btn category-btn bg-white flex items-center gap-4 rounded-xl border px-14 py-4 cursor-pointer h-full">
     <img src="${item.category_icon}" class="w-10" />
     <p class="text-xl font-bold">${item.category}</p>
     </button>
    `;
    differentCategory.appendChild(div);
  });
};

// likeBtn
const likeBtn = (imgUrl) => {
  const sideGallery = document.getElementById("side-Gallery");
  const div = document.createElement("div");
  div.innerHTML = `
<img class="rounded-lg" src="${imgUrl}" />
`;
  sideGallery.appendChild(div);
};

// adopt btn
const adoptModel = (event) => {
  let count = 3;
  const countDownValue = document.getElementById("countDownValue");
  countDownValue.innerText = count;
  my_modal_5.showModal();

  const interval = setInterval(() => {
    count--;
    if (count !== 0) countDownValue.innerText = count;
    if (count < 1) {
      clearInterval(interval);
      my_modal_5.close();
      event.textContent = "Adopted";
      event.disabled = true;
    }
  }, 1000);
};

loadCategories();
loadAllPets();
