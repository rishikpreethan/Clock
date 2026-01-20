const timeEl = document.getElementById("time");
const toggleBtn = document.getElementById("hr12");
let is12hr = false;

toggleBtn.onclick = () => {
    is12hr = !is12hr;
    toggleBtn.textContent = is12hr ? "24 hour" : "12 hour";
};

function updateTime() {
    const CurrentTime = new Date();  
    let hours = CurrentTime.getHours();
    let mins = CurrentTime.getMinutes();
    let seconds = CurrentTime.getSeconds();
    let am_pm="";
    if(is12hr){
        am_pm = hours >= 12 ? " PM":" AM";
        hours = hours % 12;
        if (hours === 0){
            hours = 12;
        }
    }
    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeEl.textContent = hours + ":" + mins + ":" + seconds + am_pm;
}

setInterval(updateTime,1000);