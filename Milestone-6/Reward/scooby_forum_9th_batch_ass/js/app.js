// All post data fetch
const loadPost = async (category) => {
  //  console.log(category)
  document.getElementById("post-container").innerHTML = "";
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/posts${
      category ? `?category=${category}` : ""
    }`
  );
  const data = await res.json();
  displayAllPost(data.posts);
};
loadPost();

const displayAllPost = (posts) => {
  //   console.log(posts);
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    // console.log(post);
    const div = document.createElement("div");
    div.innerHTML = `
        <div
      class="flex p-6 lg:p-10 gap-4 lg:flex-row 
      flex-col items-center lg:items-start bg-[#F3F3F3] rounded-3xl w-11/12 mx-auto"
    >
      <!-- indicator -->
      <div class="indicator">
        <span class="indicator-item badge ${
          post.isActive ? "bg-green-600" : "bg-red-500"
        }"></span>
        <div class="avatar">
        <div class="w-24 rounded-xl">
         <img src="${post.image}" alt="">
        </div>
         </div>
      </div>
      <!-- text -->
      <div>
        <div class="flex gap-6 opacity-60">
          <p>#${post.category}</p>
          <p>Author:${post.author.name}</p>
        </div>
        <div class="my-4">
          <h4 class="mb-5 font-bold text-xl">
          ${post.title}
          </h4>
          <p>
           ${post.description}
          </p>
        </div>
        <hr class="border border-dashed border-gray-300 mt-5" />
        <!-- img  -->
        <div class="flex justify-between mt-10">
          <div class="flex items-center gap-4">
            <i class="fa-regular fa-message"></i>
            <p>${post.comment_count}</p>

            <i class="fa-regular fa-eye"></i>
            <p>${post.view_count}</p>

            <i class="fa-regular fa-clock"></i>
            <p>${post.posted_time}</p>
          </div>
          <div class="opacity-100">
             <button id="addToList" onclick="markAsRead('${post.title}', '${
      post.view_count
    }')"
             class="addToList btn btn-circle bg-green-500 btn-sm">
              <i class="fa-solid fa-envelope-open text-white"></i>
              </button>
          </div>
        </div>
      </div>
    </div>
   `;
    postContainer.appendChild(div);
  });
};
// Mark count show details
const markAsRead = (title, view_count) => {
  //   console.log(title, view_count);
  const markAsReadContainer = document.getElementById("markAsReadContainer");
  const div = document.createElement("div");
  div.innerHTML = `
    <div
     class="flex justify-between p-2 lg:p-3 bg-white rounded-2xl items-center gap-3"
    >
    <div class="lg:4/5 w-11/12">
      <p>${title}</p>
    </div>
    <div class="lg:w-1/5 w-4/12 flex justify-end">
     <p><i class="fa-regular fa-eye"></i> ${view_count}</p>
    </div>
    </div>
 `;
  markAsReadContainer.appendChild(div);
  handleCount();
};
// count mark value
const handleCount = () => {
  const prevCount = document.getElementById("markAsReadCounter").innerText;
  const convertedCounter = parseInt(prevCount);
  const sum = convertedCounter + 1;
  document.getElementById("markAsReadCounter").innerText = sum;
};
// search category
const handleSearchByCategory = () => {
  const searchText = document.getElementById("searchPosts").value;
  //   console.log(searchText);
  loadPost(searchText);
};

// Latest Posts
const latestPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  displayLatestPost(data);
};
latestPost();

const displayLatestPost = (latestData) => {
//   console.log(latestData);
  const latestPostContainer = document.getElementById("latest-post-container");
  latestData.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="card lg:w-96 pb-5 bg-base-100 shadow-2xl">
            <figure class="lg:px-6 px-4 pt-4 lg:pt-8">
              <img src="${data.cover_image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="p-5 lg:p-10 space-y-4 lg:space-y-5">
              <p class="opacity-50 text-start">
                <i class="fa-solid fa-calendar-days me-2"></i
                >author?.posted_date || "No Publish Date"
              </p>
              <h2 class="card-title text-start">${data.title}</h2>
              <p class="text-start">${data.description}</p>
              <div class="card-actions flex gap-5 items-center">
                <div class="avatar">
                  <div
                    class="lg:w-12 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                  >
                    <img src="${data.profile_image}" />
                  </div>
                </div>
                <div>
                  <h3 class="text-start font-extrabold">${data.author.name}</h3>
                  <p class="text-start opacity-60">
                    author?.designation || "Unknown"
                  </p>
                </div>
              </div>

              <span
                id="latestPostLoader"
                class="loading loading-infinity loading-lg lg:mt-24 text-primary hidden"
              >
              </span>
              <!-- dynamic content -->
            </div>
          </div>
   `;
    latestPostContainer.appendChild(div);
  });
};
