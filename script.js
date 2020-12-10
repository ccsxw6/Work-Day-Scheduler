// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentTime = moment().format('MMMM Do YYYY'); //('MMMM Do YYYY, h:mm:ss a'); for seconds. Wasn't working at home????

$(document).ready(function() {

    var events = [];
  
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      var dateAdded = moment().format("dddd, MMMM Do");
  
      console.log(value)
      events.push({description: value, time: time, date: dateAdded});
  
      // save the value in localStorage as time
      localStorage.setItem("events", JSON.stringify(events));
      
    });
    
    // Displays current day in current day id 
    function displayTime() {
        $("#currentDay").html(currentTime) 
        setTimeout(displayTime, 1000);
    }
    displayTime()
})

    function updateHour() {
        var currentHour = moment().hour(); //gives currenthour
        
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]); //WHAT THE HECK IS THIS!!!!!


            console.log(this)

            if (currentHour > blockHour) {
                $(this).addClass("past");
            }
    })
    updateHour()



    // if (currentTime) { //if the current time is the current time, then set time-block class to .future
    //     var newColor = $(".time-block").addClass("future") //setting class to css style
    //     $(".container").append(newColor)
    // }



}
