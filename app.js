let clicked = 0;

let button = document.querySelector(".Sugarbuy")
console.log(button);

button.addEventListener("click", handleClick)

function handleClick() {
    clicked++;
    button.innerHTML = `You have: ${clicked}`; x

}

if (clicked < 3) {
    clicked = 0;
}
