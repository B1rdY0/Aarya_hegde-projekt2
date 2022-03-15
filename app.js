

let clicked = 0;

let button = document.querySelector(".Sugarbuy")

button.addEventListener("click", handleClick1)

function handleClick1() {
    clicked++;
    button.innerHTML = `You have: ${clicked}`;

    if(clicked > 2){
        clicked = -1;
    }
    updateFields();

}





let clicked1 = 0;

let buttonRed = document.querySelector(".RedBull")

buttonRed.addEventListener("click", handleClick)

function handleClick() {
    clicked1++;
    buttonRed.innerHTML = `You have: ${clicked1}`;
    if(clicked1 > 2){
        clicked1 = -1;
    }
    updateFields();
}





let clicked2 = 0;

let buttonWhite = document.querySelector(".Cocain")

buttonWhite.addEventListener("click", handleClick2)

function handleClick2(){
    clicked2++;
    buttonWhite.innerHTML = `You have: ${clicked2}`; 
    if(clicked2   > 2){
        clicked2 = -1; 
    }
    updateFields();
}



















