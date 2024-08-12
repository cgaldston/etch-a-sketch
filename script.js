const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const createButton = document.querySelector("button");
const number = document.querySelector(".slider");

function createGrid(n) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < (n * n); i++) {
        let pixel = document.createElement("div");
        pixelDim = parseInt(containerWidth / n) + "px";
        pixel.classList.add("pixel");
        pixel.style.width = pixelDim;
        pixel.style.height = pixelDim;

        pixel.addEventListener("mouseover", function () {
            pixel.style.background = 'black';
        });

        container.appendChild(pixel);
    }
}

createButton.addEventListener("click", () => {
    createGrid(number.value);
});
