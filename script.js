'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

const bodyBackground = function (color) {
    document.querySelector('body').style.backgroundColor = color
}
const displayScore = document.querySelector('.score')

let score = 10
let highScore = 0

document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?'
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 10

    displayScore.textContent = score

    document.querySelector('.check').disabled = false
    document.querySelector('.guess').disabled = false
    bodyBackground('#222')
    document.querySelector('.check').style.cursor = 'pointer'
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess || guess < 0) {
        displayMessage('No number or negative number!')
        document.querySelector('.guess').value = null;
    } else if (guess != secretNumber) {
        secretNumber > guess ? displayMessage('Too low') : displayMessage('Too high')
        score--
        displayScore.textContent = score
        document.querySelector('.guess').value = null;

        if (score === 0) {
            displayMessage(`You lose! The correct number is ${secretNumber}`)
            bodyBackground('red')
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.check').disabled = true
            document.querySelector('.guess').disabled = true
        }
    } else {
        document.querySelector('h1').textContent = 'Correct number!'
        displayMessage('')

        bodyBackground('green')
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.check').disabled = true
        document.querySelector('.guess').disabled = true
        document.querySelector('.check').style.cursor = 'not-allowed'

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    }
})
