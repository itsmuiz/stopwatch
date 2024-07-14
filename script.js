let [sec, min, hrs] = [0, 0, 0];
let timeDisplay = document.getElementById('displayTime');
let timer = null;

function updateTime() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;
        if (min === 60) {
            hrs++;
            min = 0;
        }
    }

    let h = hrs < 10 ? '0' + hrs : hrs;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;

    timeDisplay.innerHTML = h + ':' + m + ':' + s;
}

function start() {
    if (timer !== null) { 
        clearInterval(timer);
    }
    timer = setInterval(updateTime, 1000);
}

function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    [sec, min, hrs] = [0,0,0];
    timeDisplay.innerHTML = '00:00:00';
}