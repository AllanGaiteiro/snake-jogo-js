const canvas = document.getElementById('snake-js');
const context = canvas.getContext('2d')
let box = 32;

// create back ground
const criarBG = () => {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}


criarBG();