((window) => {
  window.getSelector = (selector) => document.querySelector(selector);

  window.formatNumberValue = (value) => {
    return value < 10 ? "0" + value : value;
  }
  window.formatMSValue = (value) => {
    if(value < 10){
      return "0" + value;
    }
    // else if(value < 100){
    //   return "0" + value;
    // }
    else{
      return value;
    }
  }
  window.convertSecondsToTime = (time, timeInMS) => {
    let ms;
    let sec;
    let min;
    let hour;
    if (timeInMS) {
      ms = Math.trunc(time % 100);
      sec = Math.trunc((time /100) % 60);
      min = Math.trunc((time / 6000 ) % 60);
      hour = Math.trunc((time / 360000 ) % 60);
    } else {
      sec = Math.trunc(time % 60);
      min = Math.trunc((time / 60) % 60);
      hour = Math.trunc((time / 60 / 60) % 60);
    }
    console.log('min', min);
    console.log('sec', sec);
    console.log('hour', hour);
    console.log('ms', ms);
    return [min, sec, hour, ms];
  }

  window.renderNumbers = (time, showHours, showMS) => {
    let [min, sec, hour, ms] = convertSecondsToTime(time, showMS);
    let renderHours = showHours ? `${formatNumberValue(hour)}:` : "";
    let renderMS = showMS ? `:<div>${formatMSValue(ms)}</div>` : "";
    return `${renderHours}${formatNumberValue(min)}:${formatNumberValue(sec)}${renderMS}`;
  }
})(window);
