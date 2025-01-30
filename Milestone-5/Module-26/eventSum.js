function handleOnClick() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Handle by Function";
}

document
  .getElementById("event-lisenter")
  .addEventListener("click", function () {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Using Event Listener btn";
  });

  
document.getElementById("btn-Update").addEventListener("click", function () {
  const input = document.getElementById("input");
  const inputText = input.value;
  const p = document.getElementById("input-text-display");
  p.innerText = inputText;
  input.value = "";
});
