// data fetch
const loadAllPhones = async (status, searchText) => {
  //   console.log("after 3sec");
  document.getElementById("spinner").style.display = "none";

  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${
      searchText ? searchText : "iphone"
    }`
  );
  const data = await res.json();

  if (status) {
    displayAllPhones(data.data);
  } else {
    displayAllPhones(data.data.slice(0, 6));
  }
};

// Display All phn
const displayAllPhones = (phones) => {
  const phoneContainer = document.getElementById("phones-container");

  phones.forEach((phone) => {
    // console.log(phone)
    const { brand, slug, image } = phone;
    const div = document.createElement("div");
    div.innerHTML = `
 <div class="card m-2 bg-base-100 w-96 shadow-xl">
   <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>

    </div>
  </div>
</div>
        `;
    phoneContainer.appendChild(div);
  });
};

// show all button
const handleShowAll = () => {
  const status = true;
  loadAllPhones(status);
};

// search button
const handleSearch = () => {
  //   console.log("Hello");
  document.getElementById("spinner").style.display = "block";

  const searchText = document.getElementById("search-box").value;
  setTimeout(() => {
    loadAllPhones(false, searchText);
  }, 3000);
};

//Show Details button
const phoneDetails = async (slugs) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phone/${slugs}`
  );

  const data = await res.json();
//   console.log(data)
  console.log(data.data);
  const { brand, slug, name } = data.data;

  const modelContainer = document.getElementById("modal-container");

  modelContainer.innerHTML = `
    <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <h3 class="text-lg font-bold">${brand}</h3>
            <p class="py-4">${name}</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- close the modal -->
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
  `;

  my_modal_1.showModal();
};

// auto refresh er jonno just call kora hoise
loadAllPhones();
