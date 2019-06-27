// var app = new Vue({
//     el: '#time_left',
//     data: {
//         //needs to be full date so that it correctly calculates for the year it is in.
//         event_date: '2020-06-14',
//         time_left: calculate_days_left()
//     },
//     methods: {
// let calculate_days_left = function () {
let current_date = Date.parse('14/3/2019') - (new Date());
let day = Math.floor(current_date / 1000 * 60 * 60 * 24);
console.log(day);
// }
//     }
// })

// 1. Declare the date of the webinar
// 2. function: Subtract the webinar date from the current date. (Date.parse())
// 3. Return the time remaining to the vue variable.