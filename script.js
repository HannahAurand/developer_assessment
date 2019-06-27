//I wrote this code understanding that the counter was supposed to go to the date specified in the mockup.

var app = new Vue({
    el: '#time_left',
    data: {
        //Ideally this event_date would be grabbed from the server-side, but for now it is hard-coded.
        event_date: 'June 14 2020'
    },
    methods: {
        //Declare a method within the vue object that calculates the time between the current date and the webinar.
        calculate_days_left: function (event_date) {
            //Parsing both the dates changes them into millisecond format. Subtracting them will give me the amount of milliseconds left between the two dates. The "time" of year is represented in the amount of milliseconds since January 1st at midnight,
            let time = Date.parse(this.event_date) - Date.parse(new Date());
            //Checking to make sure that time is correctly calculated (looks like it...that's a lot of milliseconds @_@')
            // console.log(time);
            //Once I have the milliseconds of time between now and the webinar, I will multiply it first by 1000 to get whole seconds instead of milliseconds. Then, I divide the seconds by how many milliseconds are in an hour (1000*60*24) to calculate the amount of days from the parsed milliseconds. 
            let days_left = Math.floor(time / (1000 * 60 * 60 * 24));
            let hours_left = Math.floor(time / (1000 * 60 * 60));
            let minutes_left = Math.floor((time / 1000 / 60) % 60);
            let seconds_left = Math.floor((time / 1000) % 60);
            // Checking to see that countdown logs correctly.
            // console.log(countdown); 
            // Now instead of just one variable, I must return a data object so that I can display the hours, minutes, and seconds until the webinar takes place. 
            return {
                'time': time,
                'days_left': days_left,
                'hours_left': hours_left,
                'minutes_left': minutes_left,
                'seconds_left': seconds_left
            }
        }
    }
})

//DONE 1. Declare the date of the webinar 
//DONE 2. function: Subtract the webinar date from the current date. (Date.parse()) 
//DONE! :D 3. Return the days remaining to the vue variable.
//4. Add hours and seconds until the webinar.