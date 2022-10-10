
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
startBtn.addEventListener('click', eventButtonHandler);

const randomHexColor = getRandomHexColor();
let timerId = null;

function eventButtonHandler() {
  timerId = setInterval(() => {
    // startBtn.disabled = true;
    const body = document.querySelector('body');
    const color = getRandomHexColor();
    body.style.backgroundColor = `${color}`;
  }, 1000);
  startBtn.disabled = true;
}

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
});