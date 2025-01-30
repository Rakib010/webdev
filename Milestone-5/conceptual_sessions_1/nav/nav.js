//

const ulTag = document.getElementById("list-container");

const listItems = ulTag.getElementsByTagName("li");

let lastClick = null;

for (let item of listItems) {
  item.addEventListener("click", function () {
    // console.log('clicked')
    if (lastClick == null) {
      item.style.backgroundColor = "red";
      item.style.color = "white";
      lastClick = item;
    } else {
      lastClick.style.backgroundColor = "transparent";
      lastClick.style.color = "#eee";

      item.style.backgroundColor = "red";
      item.style.color = "white";
      lastClick = item;
    }
  });
}
