const container = document.querySelector(".container")
const slider = document.querySelector(".slider")
const output = document.querySelector(".value")
const paint = document.querySelector(".paint")

output.textContent = slider.value;

slider.oninput = function() {
    output.textContent = this.value;
}

function createGrid() {
    for (j = 0; j < slider.value; ++j){
        const vertical = document.createElement("div")
        vertical.classList.add("column")
        container.append(vertical)
        for (i = 0; i < slider.value; ++i){
            const horizontal = document.createElement("div");
            horizontal.classList.add("cube")
            vertical.append(horizontal)
        }
    }
    const cubes = document.querySelectorAll(".cube");
    cubes.forEach(cube => {
        cube.addEventListener("mouseover", () =>
        cube.style.backgroundColor = paint.value)
    })
    let rootElement = document.documentElement;
    let sliderValue = slider.value;
    rootElement.style.setProperty("--sliderValue", sliderValue);
}

createGrid();

