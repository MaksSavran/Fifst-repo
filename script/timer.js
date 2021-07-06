let initialValue = 25;
let timerValue = 0;
let timerIntervalId;

initTimer();

function initTimer() {
  setInitialValue(initialValue);
  setTimerValue(timerValue);

  getSelector("#addMinute").addEventListener("click", () => {
    setInitialValue(initialValue + 1);
  });
  getSelector("#removeMinute").addEventListener("click", () => {
    setInitialValue(initialValue - 1);
  });
  getSelector("#timerStart").addEventListener("click", startTimer);
  getSelector("#timerStop").addEventListener("click", stopTimer);
  getSelector("#timerReset").addEventListener("click", resetTimer);
}

function setInitialValue(timeInMinutes) {
  if (timeInMinutes < 1 || timeInMinutes > 60) {
    return;
  }
  initialValue = parseInt(timeInMinutes, 10);
  getSelector(".timerValue").innerHTML = timeInMinutes;
}

function setTimerValue(timeInSeconds) {
  timerValue = timeInSeconds;
  getSelector(".timerCountdown").innerHTML = renderNumbers(timeInSeconds);
}

function startTimer() {
  if (timerValue == 0) {
    setTimerValue(initialValue * 60);
  }
  if (timerIntervalId) {
    clearInterval(timerIntervalId);
  }

  timerIntervalId = setInterval(() => {
    if (timerValue < 1) {
      clearInterval(timerIntervalId);
    } else {
      setTimerValue(timerValue - 1);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerIntervalId);
}

function resetTimer() {
  stopTimer();
  setTimerValue(0);
}
