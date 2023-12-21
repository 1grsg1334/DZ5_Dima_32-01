const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /[a-z0-9]{6}@gmail.com$/gi

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "Not OK"
        gmailResult.style.color = "red"
    }
}

const childBlock = document.querySelector('.child_block');

const parentFreeWidth = 449;

let positionX = 0;
let positionY = 0;

const moveBlock = () => {
    if (positionX < parentFreeWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 5)
    } else if (positionX >= parentFreeWidth && positionY < parentFreeWidth) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 5)
    } else if (positionX > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 5)
    } else {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 5)
    }
}

moveBlock()

let timer;
let seconds = 0;
let isTimerRunning = false;

const timeCounter = document.getElementById('secondsS');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const startTimer = () => {
    if (!isTimerRunning) {
        timer = setInterval(updateTimer, 1000);
        isTimerRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
    }
};

const stopTimer = () => {
    clearInterval(timer);
    isTimerRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
};

const resetTimer = () => {
    stopTimer();
    seconds = 0;
    updateTimerDisplay();
};

const updateTimer = () => {
    seconds++;
    updateTimerDisplay();
};

const updateTimerDisplay = () => {
    timeCounter.textContent = seconds;
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);