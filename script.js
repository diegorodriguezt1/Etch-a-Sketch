const container = document.querySelector(".container")

for (j = 0; j < 16; ++j){
    const vertical = document.createElement("div")
    vertical.classList.add("column")
    container.append(vertical)
    for (i = 0; i < 16; ++i){
        const horizontal = document.createElement("div");
        horizontal.classList.add("cube")
        vertical.append(horizontal)
    }
}

const cubes = document.querySelectorAll(".cube")

cubes.forEach(cube => {
    cube.addEventListener("mouseover", () =>
    cube.style.backgroundColor = "blue")
})


