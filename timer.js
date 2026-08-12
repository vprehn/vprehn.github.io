const arrivalDate = new Date("2026-08-14T14:04:00+02:00");

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function frame()
{
    let difference = arrivalDate - Date.now();
    
    let days =      String((Math.floor(difference / DAY))).padStart(2, "0");
    let hours =     String((Math.floor((difference / HOUR) % 24))).padStart(2, "0");
    let minutes =   String((Math.floor((difference / MINUTE) % 60))).padStart(2, "0");
    let seconds =   String((Math.floor((difference / SECOND) % 60))).padStart(2, "0");
    
    document.getElementById("1").textContent = "⏰ " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

setInterval(frame, 1000);
frame();