let button = document.getElementById("get-colour-btn")
const colour = document.getElementById("colour-picker")
const modeChoice = document.getElementById("scheme-mode")
let block1 = document.getElementById("colour-1")
let block2 = document.getElementById("colour-2")
let block3 = document.getElementById("colour-3")
let block4 = document.getElementById("colour-4")
let block5 = document.getElementById("colour-5")

button.addEventListener("click", function() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colour.value.slice(1)}&count=5&mode=${modeChoice.value}`)
    .then(response => response.json())
    .then(data => {
    const hexValues = data.colors.map(color => color.hex.clean);
    block1.style.backgroundColor = `#${hexValues[0]}`;
    block2.style.backgroundColor = `#${hexValues[1]}`;
    block3.style.backgroundColor = `#${hexValues[2]}`;
    block4.style.backgroundColor = `#${hexValues[3]}`;
    block5.style.backgroundColor = `#${hexValues[4]}`;
    document.getElementById("hexcode1").textContent = `#${hexValues[0]}`;
    document.getElementById("hexcode2").textContent = `#${hexValues[1]}`;
    document.getElementById("hexcode3").textContent = `#${hexValues[2]}`;
    document.getElementById("hexcode4").textContent = `#${hexValues[3]}`;
    document.getElementById("hexcode5").textContent = `#${hexValues[4]}`;
    
    })})