const canvas = document.getElementById('snake-js');
const context = canvas.getContext('2d')
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}
// create back ground
const createBG = () => {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
// create snake
const createSnake = () => {
    for (const s of snake) {
        context.fillStyle = "green";
        context.fillRect(s.x, s.y,box,box);
    }
}


createBG();
createSnake();