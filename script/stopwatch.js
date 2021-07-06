let stopwatchIntervalId;
let stopwatchValue = 0;

initStopwatch();

function initStopwatch() {
  getSelector("#stopwatchStart").addEventListener("click", startStopwatch);
  getSelector("#stopwatchLoop").addEventListener("click", loopStopwatch);
  getSelector("#stopwatchStop").addEventListener("click", stopStopwatch);
  getSelector("#stopwatchReset").addEventListener("click", resetStopwatch);
}

function setStopwatchValue(timeInSeconds) {
  stopwatchValue = timeInSeconds;
  getSelector(".stopwatchCounter").innerHTML = renderNumbers(
    timeInSeconds,
    true
  );
}

function startStopwatch() {
  if (stopwatchIntervalId) {
    clearInterval(stopwatchIntervalId);
  }

  stopwatchIntervalId = setInterval(() => {
    setStopwatchValue(stopwatchValue + 1);
  }, 1000);
}

function loopStopwatch() {
  getSelector(".loopsContainer").innerHTML += `<p>${renderNumbers(
    stopwatchValue,
    true
  )}</p>`;
}

function stopStopwatch() {
  clearInterval(stopwatchIntervalId);
}

function resetStopwatch() {
  stopStopwatch();
  setStopwatchValue(0);
}
