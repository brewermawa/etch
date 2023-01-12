const canvasWidth = 600;
const numberOfSquares = 20;
const width = Math.round(canvasWidth / numberOfSquares);
const height = Math.round(canvasWidth / numberOfSquares);
let rainbow = 0;
console.log("arriba");

let color = "black";
let canvas = document.querySelector(".canvas");
let square;

for (let i = 1; i <= numberOfSquares ** 2; i++) {
    square = document.createElement("div");
    square.id = "sq" + i;
    square.classList.add("square");
    square.style.width = width + "px";
    square.style.height = height + "px";
    square.addEventListener("mouseenter", (e) => {
        if (rainbow === 1) {
            let r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            color = `rgb(${r},${g},${b})`
        }
        e.target.style.backgroundColor = color;
        console.log(e.target);
    });
    
    canvas.appendChild(square);
}

document.querySelector("#black").addEventListener("click", () => { color = "black"; rainbow = 0; });
document.querySelector("#white").addEventListener("click", () => { color = "white"; rainbow = 0; });
document.querySelector("#random").addEventListener("click", () => { rainbow = 1 });
document.querySelector("#reset").addEventListener("click", () =>{
    let squares = document.querySelectorAll(".square");
    squares.forEach(clear)
});

function clear(sq) {
    sq.style.backgroundColor = "white";
}

let size = document.querySelector(".size");
let range = document.querySelector("#myRange")
console.log("abajo");

range.addEventListener("input", () =>{
    size.textContent = range.value + " x " + range.value;
});