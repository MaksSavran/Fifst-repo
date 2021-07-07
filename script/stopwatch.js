(() => {
  let stopwatchIntervalId;
  //let timeInSeconds;
  let stopwatchValue = 0;

  initStopwatch();

  function initStopwatch() {
    getSelector("#stopwatchStart").addEventListener("click", startStopwatch);
    getSelector("#stopwatchLoop").addEventListener("click", loopStopwatch);
    getSelector("#stopwatchStop").addEventListener("click", stopStopwatch);
    getSelector("#stopwatchReset").addEventListener("click", resetStopwatch);
  }

  function setStopwatchValue(time) {
    console.log('timeMS', time);
    stopwatchValue = time;
    console.log('swValue', stopwatchValue);
    getSelector(".stopwatchCounter").innerHTML = renderNumbers(
      time,
      true, true
    );
  }

  function startStopwatch() {
    if (stopwatchIntervalId) {
      clearInterval(stopwatchIntervalId);
    }

    stopwatchIntervalId = setInterval(() => {
      setStopwatchValue(stopwatchValue + 1)
    }, 10);
    
  }

  function loopStopwatch() {
    getSelector(".loopsContainer").innerHTML += `<p>${renderNumbers(
      stopwatchValue,
      true, true
    )}</p>`;
  }

  function stopStopwatch() {
    clearInterval(stopwatchIntervalId);
  }

  function resetStopwatch() {
    stopStopwatch();
    setStopwatchValue(0);
  }
})()