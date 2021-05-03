'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?'
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = 'No number :('
        document.querySelector('.guess').value = null;
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number!'
        document.querySelector('.number').textContent = secretNumber;
    } else {
        document.querySelector('.message').textContent = 'It\s not correct!'
        document.querySelector('.guess').value = null;
        if (secretNumber > guess) {
            document.querySelector('.message').textContent = 'Too low'
        } else {
            document.querySelector('.message').textContent = 'Too high'
        }
    }
})
