var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradientCode = document.querySelector("h3");
var currentBackground = document.querySelector("#gradient");

function generategradient()
{
    currentBackground.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    gradientCode.textContent = currentBackground.style.background + ";";
}

color1.addEventListener("input", generategradient);
color2.addEventListener("input", generategradient);
