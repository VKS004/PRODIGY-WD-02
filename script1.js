let startTime, elapsedTime = 0, timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

// Update time display
function updateDisplay(time) {
  let hours = Math.floor(time / (1000 * 60 * 60)).toString().padStart(2, '0');
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  let seconds = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
  display.innerText = `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
document.getElementById('start').addEventListener('click', function() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      updateDisplay(elapsedTime);
    }, 1000);
    isRunning = true;
  }
});

// Pause the stopwatch
document.getElementById('pause').addEventListener('click', function() {
  clearInterval(timerInterval);
  isRunning = false;
});

// Reset the stopwatch
document.getElementById('reset').addEventListener('click', function() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay(0);
  laps.innerHTML = '';
  isRunning = false;
});

// Record lap time
document.getElementById('lap').addEventListener('click', function() {
  if (isRunning) {
    const lapTime = document.createElement('li');
    lapTime.textContent = display.innerText;
    laps.appendChild(lapTime);
  }
});
