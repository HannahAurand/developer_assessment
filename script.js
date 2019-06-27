var app = new Vue({
    el: '#time_left',
    data: {
        //needs to be full date so that it correctly calculates for the year it is in.
        event_date: 'June 14 2020'
    },
    methods: {
        //declare a method within the vue object that calculates the time between the current date and the webinar.
        calculate_days_left: function (event_date) {
            //Parsing both the dates changes them into millisecond format. Subtracting them will give me the amount of milliseconds left between the two dates. The "time" of year is represented in the amount of milliseconds since January 1st at midnight,
            let time = Date.parse(this.event_date) - Date.parse(new Date());
            console.log(time);
            //Once I have the milliseconds of time between now and the webinar, I will multiply it first by 1000 to get whole seconds instead of milliseconds. Then, I divide the seconds by how many milliseconds are in an hour (1000*60*24) to calculate the amount of days from the parsed milliseconds. 
            /* tslint: disable: no - unused - variable */
            let countdown = Math.floor(time / (1000 * 60 * 60 * 24));
            // Checking to see that countdown logs correctly.
            // console.log(countdown); 
            // now instead of just one variable, I must return a data object so that I can display the hours, minutes, and seconds until the webinar takes place. 
            return countdown;
        }
    }
})

//DONE 1. Declare the date of the webinar 
//DONE 2. function: Subtract the webinar date from the current date. (Date.parse()) 
//DONE! :D 3. Return the days remaining to the vue variable.
//4. Add hours and seconds until the webinar.