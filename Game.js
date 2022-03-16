var timer = 10; 
let clicked = 0; 
let retryclick = false; 


var posX = 1; 
let randomX = Math.floor(Math.random()* 5) + 1;
let randomY = Math.floor(Math.random()* 5) + 1;

let button = document.querySelector(".Dot")


var x = setInterval(function() {


    if (clicked > 0 && timer > 0)
    {
        timer--;
        label2.innerHTML = Time left:${timer};
    }
    else if (clicked > 0){
        label2.innerHTML = "GAME OVER";
        label3.innerHTML = "";
        label4.innerHTML = "RETRY";
    }

  document.getElementById("time").innerHTML = timer;

}, 1000);