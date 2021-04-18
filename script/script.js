const canvas = document.getElementById('snake-js');
const context = canvas.getContext('2d');
let menu = false;
let score = 0;
var frames;
let box = 32;
let snake = [];
let direction = 'right';
const food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

// função of randon food
const randonPosition = () => {
    let random;
    do {
        random = (Math.floor(Math.random() * 15 + 1) * box)
    } while (!!snake.find(s => s.x === random || s.y === random));
    return random;
}

const controlGame = (event) => {
    if ([37, 65].includes(event.keyCode) && direction !== 'right') direction = 'left';
    if ([38, 87].includes(event.keyCode) && direction !== 'down') direction = 'up';
    if ([39, 68].includes(event.keyCode) && direction !== 'left') direction = 'right';
    if ([40, 83].includes(event.keyCode) && direction !== 'up') direction = 'down';


        if ([32].includes(event.keyCode)) {
            if (!menu) {
                clearInterval(frames)
                menuGame()
            }
            menu = !menu;
        }
}

const framesGame = () => {
    frames = setInterval(() => {
        //context.clearRect(0, 0, canvas.width, canvas.height);

        if (snake.slice(1).find(s => s.x === snake[0].x && s.y === snake[0].y)) {
            clearInterval(frames)
        }

        if (snake[0].x > 15 * box) snake[0].x = 0;
        if (snake[0].x < 0 * box) snake[0].x = 15 * box;
        if (snake[0].y < 0 * box) snake[0].y = 15 * box;
        if (snake[0].y > 15 * box) snake[0].y = 0;

        createBG();
        createFood();
        createSnake();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction === 'right') snakeX += box;
        if (direction === 'left') snakeX -= box;
        if (direction === 'up') snakeY -= box;
        if (direction === 'down') snakeY += box;

        // colid food
        if (snakeX != food.x || snakeY != food.y) {
            snake.pop();
        } else {
            food.x = randonPosition();
            food.y = randonPosition();
            score++;
            console.log(score)
        }

        // head snake
        snake.unshift({ x: snakeX, y: snakeY });

    }, 100);
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
        context.fillRect(s.x, s.y, box, box);
    }
}

const createFood = () => {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

const initGame = () => {
    framesGame()
    createBG();
    createFood();
    createSnake();
}

const menuGame = () => {
    menu = true;
    $(document).ready(function () {
        $('#modal').modal('show');
    })
}
document.addEventListener('keydown', controlGame);
createBG();
menuGame();




