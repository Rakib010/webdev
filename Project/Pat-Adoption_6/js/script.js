let pets = [];

// Pets All category
const petsAll = async () => {
  loadPets();
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await res.json();
  pets = data.pets;
  setTimeout(() => {
    // console.log('2sec after')
    displayAllPets(data.pets);
  }, 2000);
};

// display All pets
const displayAllPets = (allPets) => {
  const allPetsContainer = document.getElementById("all-Pets-Container");

  //spinner center for this classList and delete
  allPetsContainer.classList.remove("flex", "justify-center", "items-center");
  allPetsContainer.classList.add("grid");

  allPetsContainer.innerHTML = "";

  // if any pets not available
  if (!allPets.length) {
    allPetsContainer.innerHTML = `
    <div class="flex flex-col col-span-3 items-center justify-center gap-4 py-16 bg-[rgba(19,19,19,0.03)] rounded-xl"> 
    <img src="images/error.webp" />
    <P class="text-3xl font-bold">No Information Available</p>
    <p></p>
    </div>`;
    return;
  }

  allPets.forEach((pet) => {
    // console.log(pet);
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="p-4 border rounded-lg">
              <img
                class="rounded-lg lg:w-[250px] sm:w-full md:w-full"
                src="${pet.image}"
                alt="Pet"
              />
              <p class="text-2xl font-bold mt-2"> ${
                pet.pet_name || "Not Available"
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
                <button class="btn"onclick="addSideGallery('${pet.image}')">
                  <i class="fa-solid fa-thumbs-up"></i>
                </button>
                <button onclick="adoptBtn()" class="btn text-[#0E7A81] font-semibold hover:bg-[#0E7A81] hover:text-white">Adopt</button>
                <button 
               class="btn text-[#0E7A81] font-semibold hover:bg-[#0E7A81] hover:text-white" 
               onclick="detailsBtn(${pet.petId})">
               Details
                </button>
            </div>
    `;
    allPetsContainer.appendChild(div);
  });
};

// adoptBtn
const adoptBtn = () => {
  // console.log('click')
  document.getElementById("my_modal_4").show();
  const countDownValue = document.getElementById("countDownValue");

  let count = 4;
  countDownValue.innerHTML = count = 3;
  let interval = setInterval(() => {
    count--;
    // console.log(count);
    countDownValue.innerHTML = count;

    if (count <= 0) {
      clearInterval(interval);
      document.getElementById("my_modal_4").close();
      // countDownValue.innerHTML = ;
    }
  }, 1000);
};

//  detailsBtn
const detailsBtn = async (detailsId) => {
  // console.log(detailsId)
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${detailsId}`
  );
  const data = await res.json();
  // console.log(data.petData)
  displayDetailsBtn(data.petData);
};
// detailsBtn display
const displayDetailsBtn = (petData) => {
  console.log(petData);
  const detailsContent = document.getElementById("detailsContent");
  document.getElementById("detailsBtnData").click();
  detailsContent.innerHTML = `
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
};

// categories buttons api
const categoriesAll = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await res.json();
  displayCategories(data.categories);
};

// display categories buttons
const displayCategories = (categories) => {
  const differentCategory = document.getElementById("different-category");
  differentCategory.innerHTML = "";

  categories.forEach((categoryItem) => {
    // console.log(categoryItem);
    const div = document.createElement("div");
    div.innerHTML = `
     <button id="btnCategory-${categoryItem.category}" class="btn font-bold text-xl px-6 ctg-btn" onclick="category('${categoryItem.category}')">
     <img src="${categoryItem.category_icon}" alt="icon" class="w-8 h-8 object-cover">
     ${categoryItem.category}</button> 
    `;
    differentCategory.appendChild(div);
  });
};

// search button different categories
const category = (categoryName) => {
  // console.log(categoryName);
  loadPets(); // spinner function call
  fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
  )
    .then((res) => res.json())
    .then((data) => {
      //remove active buttons
      removeActiveBtn();
      // active buttons
      const activeBtn = document.getElementById(`btnCategory-${categoryName}`);
      activeBtn.classList.add(
        "active",
        "border-green-500",
        "rounded-2xl",
        "bg-gray-300"
      );
      setTimeout(() => {
        console.log("after 2sec");
        displayAllPets(data.data);
      }, 2000);
    });
};
// remove active buttons
const removeActiveBtn = () => {
  const buttons = document.getElementsByClassName("ctg-btn");
  for (let btn of buttons) {
    btn.classList.remove(
      "active",
      "border-green-500",
      "rounded-2xl",
      "bg-gray-300"
    );
  }
};

//side gallery add photos
const addSideGallery = (image) => {
  // console.log("click", image);
  const sideGallery = document.getElementById("side-Gallery");
  const div = document.createElement("div");
  div.innerHTML = `
   <img class="p-2 rounded-xl "src="${image}" alt="">
  `;
  sideGallery.appendChild(div);
};
// spinner
const loadPets = () => {
  const load = document.getElementById("all-Pets-Container");
  load.classList.remove("grid");
  load.classList.add("flex", "justify-center", "items-center");

  load.innerHTML = `
      <span class="loading loading-bars loading-lg"></span>
  `;
};

// sortByPrice buttons
const sortByPrice = () => {
  // console.log("click",);

  const allPetsContainer = document.getElementById("all-Pets-Container");

  pets.sort((firstPrice, secondPrice) => secondPrice.price - firstPrice.price);
  // console.log(pets);

  loadPets();
  // allPetsContainer.innerHTML = "";
  setTimeout(() => {
    displayAllPets(pets);
  }, 2000);
};
// view More click move to AdoptBestFriend section
const btnViewMore = () => {
  console.log("click");
  const AdoptBestFriend = document.getElementById("AdoptBestFriend");
  AdoptBestFriend.scrollIntoView({ behavior: "smooth" });
};

petsAll();
categoriesAll();
