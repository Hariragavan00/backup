var color = document.querySelector("#color")
var btn = document.getElementById("btn")
var wrap = document.getElementById("wrap")
var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


btn.addEventListener("click", function () {
    let hexcolor = "#"
    for (let i = 1; i <= 6; i++){
        hexcolor += hexrandom()
    }

    wrap.style.backgroundColor = hexcolor
    color.innerHTML = hexcolor
})

function hexrandom() {
    let hexrandomvalue = Math.floor(Math.random()*16)
    return hex[hexrandomvalue]
}

