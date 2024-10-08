



const SIZE = 16;

let mainContainer = document.querySelector(".container");
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";

function createGrid(sizeArg) {

    for (let i = 0; i < sizeArg; i++) {
        let row = document.createElement("div");
        row.style.flex = 1;
        row.style.display = "flex";

        for (let n = 0; n < sizeArg; n++) {
            let box = document.createElement("div");
            box.style.flex = 1;
            box.style.opacity = 0;
            let h = 100 / sizeArg;
            box.style.height = `${h}vh`;
            box.addEventListener("mouseover", () => {
                let red = Math.floor(Math.random()*255);
                let green = Math.floor(Math.random()*255);
                let blue = Math.floor(Math.random()*255);
                
                let currentOpacity = parseFloat(box.style.opacity);

                box.style.opacity = Math.min(currentOpacity + 0.1, 1);

                box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
            row.appendChild(box);
        }
        mainContainer.appendChild(row);
    }
}

function setChanges() {

    mainContainer.innerHTML = '';

    let size = Number(prompt("Enter grid size: "));
    if (size > 100) size = 100;

    createGrid(size);
}

createGrid(SIZE);