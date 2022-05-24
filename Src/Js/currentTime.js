function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    let day = "AM";

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        day = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    secondes = (secondes < 10) ? "0" + secondes : secondes;

    let time = hours + ":" + minutes + ":" + secondes + " " + day;

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}

currentTime();