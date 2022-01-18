var minute = 24;

var sec = 59;

function baslat(){
    setInterval(function sayac1() {
        document.getElementById('right').innerHTML = minute;
        if (sec < 10 && sec > 0) {
            document.getElementById('left').innerHTML = "0" + sec;
    
            sec--;
            return;
        }
    
        if (sec == 0) {
            document.getElementById('left').innerHTML = "0" + sec;
            sec = 59;
            return;
        }
        document.getElementById('left').innerHTML = sec;
    
        sec--;
    }, 1000);
    
    
    setInterval(function sayac() {
        document.getElementById('right').innerHTML = minute;
        minute--;
        if (minute == 0) {
            alert("Süre bitti mola gardaş");
        }
    }, 60000);
}
