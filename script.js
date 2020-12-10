$(document).ready(function() {
    var events = [] //wouldn't have thought of this

    
    function displayTime() {
        var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").html(currentTime) 
        setTimeout(displayTime, 1000);
    }
    displayTime() 


    $(".saveBtn").on("click", function() {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id"); // parent of savebtn is div w/ id in it saying the hour
        var dateAdded = moment().format("dddd, MMMM Do"); //sets date user hit enter to dateAdded

        events.push({description: value, time: time, date: dateAdded});

        // save the value in localStorage as time
        localStorage.setItem("events", JSON.stringify(events));//turn object into string, setting it in local storage
        
    });

    function updateHour() {
        var currentHour = moment().hours()
        //set styling to hours
            $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            //.attr sets and returns
            //how does [1] work? I know it logs 9 10 11 12 up to 17
            //grabbing time-block, then returning id of time-blcok, an example is "hour-9"
            //then splitting hour-9
            //is [1] returning [1] of hour-9? , so hour = [0], and 9 = [1]?
            //parses that into an integer
            //does "-" take not use - in hour-9? 

            if(currentHour > blockHour) {
                $(".description").addClass("past")
            }

        })
    }
    updateHour()
})
