//FOR CLOCK
const timeEl = document.getElementById("time1");
const toggleBtn = document.getElementById("hr12");
let is12hr = false;

toggleBtn.onclick = () => {
    is12hr = !is12hr;
    toggleBtn.textContent = is12hr ? "24 hour" : "12 hour";
    updateTime();
};

function updateTime() {
    const CurrentTime = new Date();  
    let hours = CurrentTime.getHours().toString().padStart(2,0);
    let mins = CurrentTime.getMinutes().toString().padStart(2,0);
    let seconds = CurrentTime.getSeconds().toString().padStart(2,0);
    let am_pm="";
    if(is12hr){
        am_pm = hours >= 12 ? " PM":" AM";
        hours = hours % 12;
        hours = hours.toString().padStart(2,0);
        if (hours == 0){
            hours = 12;
        }
    }

    timeEl.textContent = hours + ":" + mins + ":" + seconds + am_pm;
}

setInterval(updateTime,1000);


//FOR STOPWATCH
const display = document.getElementById("time2");
const btn = document.getElementById("start")
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
document.getElementById("start").onclick = function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
        btn.textContent = "Pause";
    }
    else{
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        btn.textContent = "Start";
    }
}
document.getElementById("reset").onclick = function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = (Math.floor(elapsedTime / (1000 * 60 * 60))).toString().padStart(2,"0");
    let mins = (Math.floor(elapsedTime / (1000 * 60) % 60)).toString().padStart(2,"0");
    let seconds = (Math.floor(elapsedTime / 1000 % 60)).toString().padStart(2,"0");
    let ms = (Math.floor(elapsedTime % 1000 / 10)).toString().padStart(2,"0");

    display.textContent = `${hours}:${mins}:${seconds}:${ms}`;
}