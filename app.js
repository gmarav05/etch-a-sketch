const container = document.querySelector("#container");
const button = document.querySelector('button');

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

        for (let index = 1; index <=input; index++) {

            const row = document.createElement("div");
            row.classList.add("row");
            row.textContent = " ";

            for (let index = 1; index <=input; index++) {

                const column = document.createElement("div");
                column.classList.add("column");
                column.textContent = " ";
                column.addEventListener('mouseenter', () => {
                    column.style.backgroundColor = 'blue'
                });
                container.appendChild(column);

            }

            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = 'blue'
            });

            container.appendChild(row);

        }   
}
