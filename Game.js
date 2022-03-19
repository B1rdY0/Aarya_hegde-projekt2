var timer = 10;
let clicked = 0;
let retryclick = false;


var posX = 1;

let lebel = document.querySelector(".aim.text");
let label2 = document.querySelector(".time-left");
let label3 = document.querySelector(".point-btn");
let label4 = document.querySelector(".restart-game");



var x = setInterval(function () {


    if (clicked > 0 && timer > 0) {
        timer--;
        label2.innerHTML = `Time left; ${timer}`;
    }
    else if (clicked > 0) {
        label2.innerHTML = "GAME OVER";
        label3.innerHTML = "";
        label4.innerHTML = "RETRY";
    }

    document.getElementById("time").innerHTML = timer;

}, 1000);

label3.addEventListener("click", handleClick);



function handleClick() {
    if (timer > 0) {
        clicked += 1;
    }

    label2.innerHTML = `points: ${clicked}`;

}
