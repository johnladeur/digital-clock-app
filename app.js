var fullDate = new Date ();
var hours = fullDate.getHours();
var minutes =fullDate.getMinutes();
var seconds = fullDate.getSeconds();

var day = fullDate.getDay();
var month= fullDate.getMonth();
var year = fullDate.getFullYear();

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = minutes;
document.getElementById('second').innerHTML = seconds;

document.getElementById('month').innerHTML = month;
document.getElementById('day').innerHTML = day;
document.getElementById('year').innerHTML = year;