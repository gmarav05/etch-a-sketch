const container = document.querySelector("#container");
const button = document.querySelector("button");

let input = 16;

button.addEventListener("click", () => {
  let userInput = prompt("Grid size");
  createGrid(input);
  input = parseInt(userInput);

  if (input > 100) {
    alert("Grid should be less than 100");
  } else {
    createGrid(input);
  }
});

createGrid(16);

function createGrid(input) {
  container.textContent = "";
  const cellSize = 500 / input;

  for (let i = 0; i < input * input; i++) {
    const row = document.createElement("div");
    row.classList.add("column");
    row.style.width = `${cellSize}px`;
    row.style.height = `${cellSize}px`;

    row.addEventListener("mouseenter", () => {
      row.style.backgroundColor = "black";
    });
    container.appendChild(row);
  }
}
