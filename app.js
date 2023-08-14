const boton = document.querySelector('button');
const color = document.getElementById('color');

function changeHexColor() {
    let digits = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++ ) {
        let randomIndex = Math.floor(Math.random() *16);
        colorHex += digits[randomIndex];
    }

    return colorHex;
}

boton.addEventListener('click', function(){
    let randomColor = changeHexColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});