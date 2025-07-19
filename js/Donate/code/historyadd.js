
function historyAdded() {
  //history added
  const heading = document.getElementById("h2-tag").innerText;
  const historyItem = document.createElement("div");
  historyItem.className = "p-4 rounded-lg shadow-md border-2 mt-5 mb-5";

  historyItem.innerHTML = `
    <p class="font-bold">${input} Taka is ${heading}</p>
    <p>Date:${new Date().toLocaleString()}</p>
  
  `;
  return document.getElementById("history-items").appendChild(historyItem);

}
