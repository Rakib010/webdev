function calculateTriangleArea() {
  // console.log('click')
  const triangleBase = document.getElementById("triangle-base").value;
  const triangleHeight = document.getElementById("triangle-height").value;
  const triangleArea = document.getElementById("triangle-area");

  const area = 0.5 * parseFloat(triangleBase) * parseFloat(triangleHeight);

  triangleArea.innerText = area;

  sideBar("TriangleArea", area);
}

function calculateRectangleArea() {
  const rectangleLength = document.getElementById("rectangle-length").value;
  const rectangleWidth = document.getElementById("rectangle-width").value;

  const rectangle = parseFloat(rectangleWidth) * parseFloat(rectangleLength);

  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = rectangle;
  sideBar("rectangleArea ", rectangle);
}

function calculateParallelogramArea() {
  const pBase = document.getElementById("parallelogram-base").value;
  const pHeight = document.getElementById("parallelogram-heigth").value;
  const pArea = parseFloat(pBase) * parseFloat(pHeight);
  const parallelogramArea = document.getElementById("parallelogram-area");
  parallelogramArea.innerText = pArea;
  sideBar("parallelogramArea", pArea);
}

function calculateEllipseArea() {
  const eMinor = document.getElementById("ellipse-minor-radius").value;
  const eMajor = document.getElementById("ellipse-major-radius").value;

  const ellipseArea = 3.1416 * parseFloat(eMinor) * parseFloat(eMajor);

  document.getElementById("ellipse-area").innerText = ellipseArea;
  sideBar("EllipseArea", ellipseArea);
}

function sideBar(idName, id) {
  const calculationEntry = document.getElementById("calculation-entry");

  const p = document.createElement("p");
  p.classList.add("font-bold", "text-xl");
  p.innerHTML = `
     ${idName}  ${id} cm2
  `;
  calculationEntry.appendChild(p);
}
