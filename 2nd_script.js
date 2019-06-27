//This is the script that will count down five days from the current date. 

var app = new Vue({
    el: '#time_left',
    data: {
        //Ideally this event_date would be grabbed from the server-side, but for now it is hard-coded.
        current_date: new Date()
    },
    methods: {

        calculate_days_left: function (current_date) {
            //First I must grab the current date and time 
            let today = this.current_date;
            today.setHours(24, 0, 0);
            console.log(today);
            webinar_date = today.getDate() + 5;
            console.log(webinar_date);
            webinar_ms = Math.floor(Date.parse(webinar_date));
            today_ms = Math.floor(Date.parse(today));
            console.log(webinar_ms);
            console.log(today_ms);
            five_day_count = Math.floor(webinar_ms - today_ms);
            console.log(five_day_count);




        }
    }
})

let time = Date.parse(this.event_date) - Date.parse(new Date());