var n1 = 6, n2 = 6;

document.querySelector(".player1").addEventListener("click", function(){
    n1 = randomNumber1();
    var srcName1 = "/images/imagedice/dice"+ n1 +".png";
    document.querySelector(".img1").setAttribute("src",srcName1);
    compare();
});
document.querySelector(".player2").addEventListener("click", function(){
    n2 = randomNumber1();

    var srcName2 = "/images/imagedice/dice"+ n2 +".png";

    document.querySelector(".img2").setAttribute("src",srcName2);
    compare();
});

function compare() {
    if (n1 > n2) {
        document.querySelector("h1").innerHTML = "Player1 win~";
    } else if (n1 === n2) {
        document.querySelector("h1").innerHTML = "Draw";
    } else
        document.querySelector("h1").innerHTML = "Player2 win~";
}
function randomNumber1(){
    var num = Math.floor(Math.random() * 6) + 1;
    return num;
}



