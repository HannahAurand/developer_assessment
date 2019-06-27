//This is the script that will count down five days from the current date. 

var app = new Vue({
    el: '#time_left',
    data: {
        //Ideally this event_date would be grabbed from the server-side, but for now it is hard-coded.
        event_date: new Date()
    },
    methods: {

        calculate_days_left: function (event_date) {

            let time = Date.parse(this.event_date)

            let days_left = Math.floor(time / (1000 * 60 * 60 * 24));
            let hours_left = Math.floor(time / (1000 * 60 * 60));
            let minutes_left = Math.floor((time / 1000 / 60) % 60);
            let seconds_left = Math.floor((time / 1000) % 60);

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

