<template>
    <v-container>
        <v-col cols="12">
            <v-row class="d-flex justify-end">
                <v-col cols="6">
                </v-col>
                <v-col cols="6">
                    <h1>Snake Game</h1>
                    <canvas id="gameCanvas" width="500" height="500"></canvas>
                    <v-col class="text-center">
                        <v-btn v-if="first" x-large text color="secondary" @click="startGame(); first=false">Start</v-btn>
                        <v-btn v-else x-large text color="secondary" @click="gameOver=false;startGame()">Restart</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn
                            outlined
                            @click="goToSource()"
                        >
                            Source
                        </v-btn>
                    </v-col>
                </v-col>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>

  export default {
    name: 'SnakeGameView',

    data: () => ({
        first: true,
        gameOver: false,
        changingDirection: false,
        CANVAS_BORDER_COLOR: '',
        CANVAS_BACKGROUND_COLOR: '',
        SNAKE_COLOR: '',
        SNAKE_BORDER_COLOR: '',
        FOOD_COLOR: 'red',
        FOOD_BORDER_COLOR: 'darkred',

        changingDirection: false,
            // Get the canvas element
        gameCanvas: {},
        // Return a two dimensional drawing context
        ctx: null,
        snake: [],
        dx: 10,
        dy: 0,
        foodX: 0,
        foodY: 0

    }),

    mounted() {
        this.CANVAS_BORDER_COLOR = 'black',
        this.CANVAS_BACKGROUND_COLOR = "white",
        this.SNAKE_COLOR = 'lightgreen',
        this.SNAKE_BORDER_COLOR = 'darkgreen',
            // Get the canvas element
        this.gameCanvas = document.getElementById("gameCanvas"),
        // Return a two dimensional drawing context
        this.ctx = gameCanvas.getContext("2d")

        //  Select the colour to fill the canvas
        this.ctx.fillStyle = this.CANVAS_BACKGROUND_COLOR;
        //  Select the colour for the border of the canvas
        this.ctx.strokestyle = this.CANVAS_BORDER_COLOR;

        // Draw a "filled" rectangle to cover the entire canvas
        this.ctx.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
        // Draw a "border" around the entire canvas
        this.ctx.strokeRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);

        this.snake = [
            {x: 250, y: 250},
            {x: 240, y: 250},
            {x: 230, y: 250},
            {x: 220, y: 250},
            {x: 210, y: 250}
        ]
        
        // Move on step to the right
        //this.advanceSnake()
        // Change vertical velocity to 

        //this.main();
        // Draw snake on the canvas
        this.drawSnake();
        document.addEventListener("keydown", this.changeDirection)

    },

    methods: {
        goToSource() {
            window.open("https://github.com/Sarens24/personal-web-app/tree/master/src/views/snakeGame")
        },

        startGame() {
            this.snake = [
                {x: 250, y: 250},
                {x: 240, y: 250},
                {x: 230, y: 250},
                {x: 220, y: 250},
                {x: 210, y: 250}
            ]
            this.dx = 10;
            this.dy = 0;
            this.drawSnake();
            this.gameOver = false;
            this.createFood()
            this.main()
        },

        main() {
            if (this.didGameEnd()) {
                this.gameOver = true;
                return;
            }
            setTimeout(() => {
                this.changingDirection = false;
                this.clearCanvas();
                this.drawFood();
                this.advanceSnake();
                this.drawSnake();
                this.main();
            }, 100);
        },

        drawSnakePart(snakePart) {
            this.ctx.fillStyle = 'lightgreen';
            this.ctx.strokestyle = 'darkgreen';
            this.ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
            this.ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
        },

        drawSnake() {
            this.snake.forEach((part) => this.drawSnakePart(part));
        },

        advanceSnake() {
            const head = {x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy};
            this.snake.unshift(head);
            const didEatFood = this.snake[0].x === this.foodX && this.snake[0].y === this.foodY;
            if (didEatFood) {
                this.createFood();
            } else {
                this.snake.pop();
            }
        },

        clearCanvas() {
            this.ctx.fillStyle = "white";
            this.ctx.strokeStyle = "black";
            this.ctx.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
            this.ctx.strokeRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
        },

        changeDirection(event) {
            const LEFT_KEY = 37;
            const RIGHT_KEY = 39;
            const UP_KEY = 38;
            const DOWN_KEY = 40;
            const keyPressed = event.keyCode;
            const goingUp = this.dy === -10;
            const goingDown = this.dy === 10;
            const goingRight = this.dx === 10;
            const goingLeft = this.dx === -10;
            if (this.changingDirection) 
                return;
                
            this.changingDirection = true;
            if (keyPressed === LEFT_KEY && !goingRight) {
                this.dx = -10;
                this.dy = 0;
            }
            if (keyPressed === UP_KEY && !goingDown) {
                this.dx = 0;
                this.dy = -10;
            }
            if (keyPressed === RIGHT_KEY && !goingLeft) {
                this.dx = 10;
                this.dy = 0;
            }
            if (keyPressed === DOWN_KEY && !goingUp) {
                this.dx = 0;
                this.dy = 10;
            }
        },

        randomTen(min, max) {
            return Math.round((Math.random() * (max-min) + min) / 10) * 10;
        },

        createFood() {
            this.foodX = this.randomTen(0, this.gameCanvas.width - 10);
            this.foodY = this.randomTen(0, this.gameCanvas.height - 10);
            this.snake.forEach((part) => {
                console.log(this.foodX)
                const foodIsOnSnake = part.x == this.foodX && part.y == this.foodY
                if (foodIsOnSnake)
                this.createFood();
            });
        },

        drawFood() {
            this.ctx.fillStyle = 'red';
            this.ctx.strokestyle = 'darkred';
            this.ctx.fillRect(this.foodX, this.foodY, 10, 10);
            this.ctx.strokeRect(this.foodX, this.foodY, 10, 10);
        },

        didGameEnd() {
            for (let i = 4; i < this.snake.length; i++) {
                const didCollide = this.snake[i].x === this.snake[0].x &&
                this.snake[i].y === this.snake[0].y
                if (didCollide) return true
            }
            const hitLeftWall = this.snake[0].x < 0;
            const hitRightWall = this.snake[0].x > this.gameCanvas.width - 10;
            const hitToptWall = this.snake[0].y < 0;
            const hitBottomWall = this.snake[0].y > this.gameCanvas.height - 10;
            return hitLeftWall || 
                    hitRightWall || 
                    hitToptWall ||
                    hitBottomWall
        }

    }

  }
</script>