function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartRandomColor);
stopBtn.addEventListener('click', onStopRandomColor);
let newBackground = null;
function onStartRandomColor() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    // body.style.backgroundColor = getRandomHexColor()    
    newBackground = setInterval(() => {body.style.backgroundColor = getRandomHexColor()}, 1000)
}
function onStopRandomColor() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(newBackground)
}