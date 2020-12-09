// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$(document).ready(function() {
    // Displays current day in current day id 
    function displayTime() {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").html(time) 
        setTimeout(displayTime, 1000);// keeps seconds!
    }
    displayTime()
})
