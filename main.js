let bild = document.getElementById("DVD");

let x = 50;
let y = 50;
let step = 10;

function move(event) {
    if (event.key === "ArrowRight") x += step;
    if (event.key === "ArrowLeft") x -= step;

    bild.style.left = x + "px";
}

document.addEventListener("keydown", move);