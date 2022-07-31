import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'

import {update as updateFood, draw as drawFood} from './food.js'

import { outsideGrid } from './grid.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('gameBoard')
let gameOver = false




function main(currentTime) {
    if(gameOver) {
        return alert ('sorry you lost')
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastReminder = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastReminder < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


