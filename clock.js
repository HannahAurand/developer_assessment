

//First, I set the webinar's date to 5 days from the current time at midnight:
var countDownDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
//Here I set the date's hour to midnight.
countDownDate.setHours(24);
// console.log('countdownfunctioncalled');

//Then, I used the setInterval method from the date object to count down.
let x = setInterval(function () {
    // console.log('interval called')
    var current_date = new Date();
    //I set the current date's time to midnight so that the count down begins counting exactly 5 days from midnight of the deadline. 
    current_date.setHours(24);
    //Parsing the returned date into milliseconds.
    current_date.getTime();
    //Getting the amount of milliseconds between the current date and the deadline date.
    let time_between = countDownDate - current_date;
    //Convert milliseconds into useful times
    let seconds = Math.floor((time_between % (1000 * 60)) / 1000);
    console.log(seconds);
    let minutes = Math.floor((time_between % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((time_between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(time_between / (1000 * 60 * 60 * 24));


    //Stopping the timer when it reaches 0.
    if (time_between <= 0) {
        clearInterval(time_left);
        document.getElementById("time_left").innerHTML = "Event has passed";
    }
    //Displaying the count-down in the html page. 
    document.getElementById("time_left").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

}, 1000);
