(function() {
  function clock() {
    var fullDate = new Date();
    var hours = formatDateTimeNumber(fullDate.getHours());
    var minutes = formatDateTimeNumber(fullDate.getMinutes());
    var seconds = formatDateTimeNumber(fullDate.getSeconds());
    var day = formatDateTimeNumber(fullDate.getDate());
    var month = formatDateTimeNumber(fullDate.getMonth());
    var year = formatDateTimeNumber(fullDate.getFullYear());

    if (is24hr == false && hours > 12) {
      hours = hours - 12;
    }

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = ":" + minutes;
    document.getElementById("second").innerHTML = ":" + seconds;

    document.getElementById("month").innerHTML = month + 1;
    document.getElementById("day").innerHTML = "/" + day;
    document.getElementById("year").innerHTML = "/" + year;
  }

  function formatDateTimeNumber(dateTimeNumber) {
    if (dateTimeNumber < 10) {
      return "0" + dateTimeNumber;
    }
    return dateTimeNumber;
  }

  var is24hr = true;
  var timeButton = document.getElementById("myButton");
  timeButton.addEventListener("click", function() {
    is24hr = !is24hr;
  });

  setInterval(clock, 1000);
})();
