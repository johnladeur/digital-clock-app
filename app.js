console.log(new Date);
function clock(){
var fullDate = new Date ();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var seconds = fullDate.getSeconds();
var month = fullDate.getMonth();
var day = fullDate.getDate();
var year = fullDate.getFullYear();

if (hours < 10) {
    hours = "0" + hours;
}
if (mins < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('second').innerHTML = ":" + seconds;
document.getElementById('month').innerHTML = month + 1;
document.getElementById('day').innerHTML = "/" + day;
document.getElementById('year').innerHTML = "/" + year;


}
setInterval(clock, 100);
