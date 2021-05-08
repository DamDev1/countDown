function countdown(){
    const deadline = new Date("May 31 2021 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const gap = deadline - currentTime;

    // get Day hours mins sec
    const sec = 1000;
    const mins = sec * 60;
    const hours = mins * 60;
    const day = hours * 24;

    // calculate the distance

    const distanceDay = Math.floor(gap / day);
    const distanceHour = Math.floor((gap % day) / hours);
    const distanceMins = Math.floor((gap % hours) / mins);
    const distanceSec = Math.floor((gap % mins) / sec);

    document.getElementById("day").innerText = distanceDay;
    document.getElementById("hours").innerText = distanceHour;
    document.getElementById("mins").innerText = distanceMins;
    document.getElementById("sec").innerText = distanceSec;
}

setInterval(countdown, 1000);