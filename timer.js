const arrivalDate = new Date("2026-08-14T12:04:00"); /* Berlin = UTC+2 (eigentlich 17 Uhr) */ 
setInterval(frame, 10);

function timeTill(target) {
    let difference = new Date(target) - new Date();

    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
}

function frame()
{
    let eta = timeTill(arrivalDate);
    let hoursLeft = (eta.hours.toString().length > 1) ? eta.hours.toString() : "0".concat(eta.hours.toString());
    let minutesLeft = (eta.minutes.toString().length > 1) ? eta.minutes.toString() : "0".concat(eta.minutes.toString());
    let secondsLeft = (eta.seconds.toString().length > 1) ? eta.seconds.toString() : "0".concat(eta.seconds.toString());
    document.getElementById("1").innerHTML = hoursLeft.concat("h ", minutesLeft, "m ", secondsLeft, "s");
}
