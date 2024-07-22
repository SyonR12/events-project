let divcolor = document.querySelector("div");
let showbutton = document.getElementById("show");
let aquabutton = document.getElementById("aqua");
let tealbutton = document.getElementById("teal");
let pinkbutton = document.getElementById("pink");
let purplebutton = document.getElementById("purple");
let colorlessbutton = document.getElementById("colorless");
aquabutton.onclick = function() {
    divcolor.style.backgroundColor = "aqua";
    divcolor.innerHTML = "aqua"
}
tealbutton.onclick = function() {
    divcolor.style.backgroundColor = "teal";
    divcolor.innerHTML = "teal";
}
pinkbutton.onclick = function() {
    divcolor.style.backgroundColor = "pink";
    divcolor.innerHTML = "pink";
}
purplebutton.onclick = function() {
    divcolor.style.backgroundColor = "purple";
    divcolor.innerHTML = "purple";
}
colorlessbutton.onclick = function() {
    divcolor.style.backgroundColor = "white";
    divcolor.innerHTML = "colorless";
}
showbutton.onclick = function() {
    if (showbutton.innerHTML == "show") {
        showbutton.innerHTML = "hide"
        divcolor.style.display = "none";
    } else {
        showbutton.innerHTML = "show";
        divcolor.style.display = "flex";
    }
}