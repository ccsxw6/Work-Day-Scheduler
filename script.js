// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

$(document).ready(function() {
    
    // Displays current day in current day id 
    function displayTime() {
        $("#currentDay").html(currentTime) 
        setTimeout(displayTime, 1000);
    }
    displayTime()

    if (currentTime) { //if the current time is the current time, then set time-block class to .future
        var newColor = $(".time-block").addClass("future")
        $(".container").append(newColor)
    }

    //color time blocks
    //.present .future .past classes in css
    //var to check if now is past, current, or future
    // if rowTime = currentTime, then row time gets this styling
    //else, if rowTime < currentTime, 
    //else, if rowtime > currentTime, 
    //OR set first row to c when time is 9am? 
  
})
