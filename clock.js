

//First, I set the webinar's date to 5 days from the current time at midnight:
var countDownDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
countDownDate.setHours(24);
console.log('countdownfunctioncalled');

//Then, I used the setInterval method from the date object to count down.
let x = setInterval(function () {
    console.log('interval called')
    var current_date = new Date();
    current_date.setHours(24);
    current_date.getTime();
    let time_between = countDownDate - current_date;
    let seconds = Math.floor((time_between % (1000 * 60)) / 1000);
    console.log(seconds);
    let minutes = Math.floor((time_between % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((time_between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(time_between / (1000 * 60 * 60 * 24));

    if (time_between < 0) {
        clearInterval(x);
        document.getElementById("time_left").innerHTML = "Event has passed";
    }

    document.getElementById("time_left").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

}, 1000);
