((window) => {
  window.getSelector = (selector) => document.querySelector(selector);

  window.formatNumberValue = (value) => {
    return value < 10 ? "0" + value : value;
  }

  window.convertSecondsToTime = (timeInSeconds) => {
    let sec = Math.trunc(timeInSeconds % 60);
    let min = Math.trunc((timeInSeconds / 60) % 60);
    let hour = Math.trunc((timeInSeconds / 60 / 60) % 60);
    return [min, sec, hour];
  }

  window.renderNumbers = (timeInSeconds, showHours) => {
    let [min, sec, hour] = convertSecondsToTime(timeInSeconds);
    let renderHours = showHours ? `${formatNumberValue(hour)}:` : "";
    return `${renderHours}${formatNumberValue(min)}:${formatNumberValue(sec)}`;
  }
})(window);
