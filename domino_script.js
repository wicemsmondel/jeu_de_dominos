/*var add = 0;

function rotate() {
    document.getElementById("domino23").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("domino23");
el.addEventListener("click", rotate);*/

var domino = [
    "images\[0,0].png",
    "images\[0,1].png",
    "images\[0,2].png",
    "images\[0,3].png",
    "images\[0,4].png",
    "images\[0,5].png",
    "images\[0,6].png",
    "images\[1,1].png",
    "images\[1,2].png",
    "images\[1,3].png",
    "images\[1,4].png",
    "images\[1,5].png",
    "images\[1,6].png",
    "images\[2,2].png",
    "images\[2,3].png",
    "images\[2,4].png",
    "images\[2,5].png",
    "images\[2,6].png",
    "images\[3,3].png",
    "images\[3,4].png",
    "images\[3,5].png",
    "images\[3,6].png",
    "images\[4,4].png",
    "images\[4,5].png",
    "images\[4,6].png",
    "images\[5,5].png",
    "images\[5,6].png",
    "images\[6,6].png"
];

var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];

function handDistribution() {
    for (i = 0; i < 7; i++) {
        var randomDistribution = Math.floor(Math.random() * domino.length);
        var randomDomino = domino[randomDistribution];
        player1.push(randomDomino);
        player2.push(randomDomino)
    }
}

handDistribution();
console.log(player1, player2);