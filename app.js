function clock (){
    var fullDate = new Date ();
    var hours = fullDate.getHours();
    var minutes =fullDate.getMinutes();
    var seconds = fullDate.getSeconds();
    var day = fullDate.getDate();
    var month= fullDate.getMonth();
    var year = fullDate.getFullYear();
    
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
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
    document.getElementById('minute').innerHTML = ":" + minutes;
    document.getElementById('second').innerHTML = ":" + seconds;
    
    document.getElementById('month').innerHTML = month + 1;
    document.getElementById('day').innerHTML = day;
    document.getElementById('year').innerHTML = year; 
    document.getElementById('day').innerHTML = "/" + day;
    document.getElementById('year').innerHTML = "/" + year;
    
      var timeButton = document.getElementById('myButton').addEventListener("click", function(){
            if (hours > 12){
                return hours - 12;
        }  
        
    });
    }
    
    setInterval(clock, 1000); 
  