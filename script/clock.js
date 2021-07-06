(() => {
  setInterval(showDate);

  function showDate() {
    let date = new Date();
    let day = formatNumberValue(date.getDate());
    let month = formatNumberValue(date.getMonth() + 1);
    let year = formatNumberValue(date.getFullYear());
    let hour = formatNumberValue(date.getHours());
    let min = formatNumberValue(date.getMinutes());
    let sec = formatNumberValue(date.getSeconds());
    getSelector(".currentDate").innerHTML = `${day}.${month}.${year}`;
    getSelector(".currentTime").innerHTML = `${hour}:${min}:${sec}`;
  }
})()