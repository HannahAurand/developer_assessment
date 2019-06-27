//This is the script that will count down five days from the current date. 

var app = new Vue({
    el: '#time_left',
    data: {

    },
    methods: {

        calculate_days_left: function (current_date) {
            // console.log(current_date);
            //First I must grab the current date and time 
            let now = new Date;
            let today = Date.parse(new Date());
            let ms_web = now.setDate(now.getDate() + 5);
            //setting today's time to midnight
            // today.setHours(24, 0, 0);
            console.log(today);
            //Setting the webinar date to be 5 days from today.
            // let webinar_date =
            //     console.log(webinar_date);
            //parsing the date of the webinar to be in milliseconds
            let webinar = Date.parse(new Date(ms_web));
            //parsing today's date to be in milliseconds
            // let today_ms = Math.floor(Date.parse(today));
            console.log(webinar);
            // console.log(today_ms);
            let five_day_count = Math.floor(webinar - today);
            console.log(five_day_count);
            let days = Math.floor(five_day_count / (1000 * 60 * 60 * 24));
            console.log(days);
            // return days

            // let days_left = Math.floor(time / (1000 * 60 * 60 * 24));
            // start.setDate(start.getDate() + 1);
        }
    }
})

// let time = Date.parse(this.event_date) - Date.parse(new Date());