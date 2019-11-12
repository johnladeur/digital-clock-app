function clock (){
var fullDate = new Date ();
var hours = fullDate.getHours();
var minutes =fullDate.getMinutes();
var seconds = fullDate.getSeconds();

var day = fullDate.getDate();
var month= fullDate.getMonth();
var year = fullDate.getFullYear();
var change = true;

if (hours < 10) {
    hours = "0" + hours;
}

if (minutes < 10) {
    minutes = "0" + minutes;
}

if (seconds < 10) {
    seconds = "0" + seconds;
}

if (month < 10) {
    month = "0" + month;
}

if (day < 10) {
    day = "0" + day;
}

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + minutes;
document.getElementById('second').innerHTML = ":" + seconds;

document.getElementById('month').innerHTML = month + 1;
document.getElementById('day').innerHTML = "/" + day;
document.getElementById('year').innerHTML = "/" + year;

//if (clickEvent) --> switch value of var change to false
//if change == false && hours > 12 --> return hours = hours - 12;
//else {do nothing}

document.getElementById('myButton').addEventListener("click", formatChange);


function formatChange(){
    if (hours > 12){
        document.getElementById('myButton').innerHTML = hours -= 12;
}   

}


setInterval(clock, 1000);


}