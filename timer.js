const arrivalDate = new Date("2026-08-14T14:04:00+02:00");

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

function frame()
{
    let difference = arrivalDate - Date.now();
    
    let hours =     String((Math.floor(difference / HOUR))).padStart(2, "0");
    let minutes =   String((Math.floor((difference / MINUTE) % 60))).padStart(2, "0");
    let seconds =   String((Math.floor((difference / SECOND) % 60))).padStart(2, "0");
    
    document.getElementById("1").textContent = "⏰ " + hours + "h " + minutes + "m " + seconds + "s";
}

setInterval(frame, 1000);
frame();