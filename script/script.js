const canvas = document.getElementById('snake-js');
const context = canvas.getContext('2d');
let status = false;
var frames;
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
    document.addEventListener('keydown', controlGame);
    createBG();
    createSnake();
}

const controlGame = (event) => {
    if ([37, 65].includes(event.keyCode) && direction !== 'right') direction = 'left';
    if ([38, 87].includes(event.keyCode) && direction !== 'down') direction = 'up';
    if ([39, 68].includes(event.keyCode) && direction !== 'left') direction = 'right';
    if ([40, 83].includes(event.keyCode) && direction !== 'up') direction = 'down';

    if ([32].includes(event.keyCode)){
        if (status) {
            clearInterval(frames)
        } else {
            framesGame();
        }
        status = !status;
    }
}

const framesGame = () => {
    frames = setInterval(() => {
        if(snake[0].x > 16 * box && direction === 'right')snake[0].x = 0 ;
        if(snake[0].x < 0 * box && direction === 'left')snake[0].x = 16 * box;
        if(snake[0].y < 0 * box && direction === 'up')snake[0].y = 16 * box;
        if(snake[0].y > 16 * box && direction === 'down')snake[0].y = 0;
        
        createBG();
        createSnake();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction === 'right') snakeX += box / 3;
        if (direction === 'left') snakeX -= box / 3;
        if (direction === 'up') snakeY -= box / 3;
        if (direction === 'down') snakeY += box / 3;

        // remove 
        snake.pop();

        // head snake
        snake.unshift({ x: snakeX, y: snakeY });

    }, 100);
}

initGame();