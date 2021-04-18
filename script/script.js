const canvas = document.getElementById('snake-js');
const context = canvas.getContext('2d')
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}
let direction = 'right';

// create back ground
const createBG = () => {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
// create snake
const createSnake = () => {
    for (const s of snake) {
        context.fillStyle = "green";
        context.fillRect(s.x, s.y, box, box);
    }
}

const initGame = () => {
    createBG();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'up') snakeY -= box;
    if (direction == 'down') snakeY += box;

    // remove 
    snake.pop();
    
    // head snake
    snake.unshift({x:snakeX,y:snakeY});

}


setInterval(() => {
    initGame();
}, 100);

