var add = 0;

function rotate() {
    document.getElementById("domino23").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("domino23");
el.addEventListener("click", rotate);