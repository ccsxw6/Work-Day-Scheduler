$(document).ready(function() {
    // function for displaying the time using moment
    function displayTime() {
        var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").html(currentTime) 
        // displaying the time every second
        setTimeout(displayTime, 1000);
    }
    displayTime() 
    
    var userInput = [] 

    // Event to save user input
    $(".saveBtn").on("click", function() {
        // grabbing the value of the text area
        var value = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 
        var dateAdded = moment().format("dddd, MMMM Do"); 
        
        // adding array of objects to the userInput array
        userInput.push({description: value, time: time, date: dateAdded});
        // setting the local storage to that array 
        localStorage.setItem("userInput", JSON.stringify(userInput));
    });

    // retrieving the user info from loal storage
    var storedInput = JSON.parse(localStorage.getItem("userInput"));

    if (storedInput !== null) {
        userInput = storedInput;
    }

    // looping through userInput, and adding it to html
    for(var i = 0; i < userInput.length; i++) {
        var userDescription = userInput[i].description;
        // grabbing the time id and adding the description to the description section of that time slot
        $("#" + userInput[i].time).children(".description").text(userDescription);
      }


      // function to change color of time block
    function updateHour() {
        var currentHour = moment().hours()
        
            // looping through each time block, for each time block this function will be ran
            $(".time-block").each(function() {
                    // getting the id from the .time-block, separating the id and grabbing the number from that attr
                    var rowHour = parseInt($(this).attr("id").split("-")[1]);
                    // prints 9 ; 10
                    // console.log(rowHour)

                    if(currentHour > rowHour) {
                        $(this).addClass("past")
                    }
                    else if(currentHour === rowHour) {
                        $(this).removeClass("past")
                        $(this).addClass("present")
                    }
                    else {
                        $(this).removeClass("past")
                        $(this).removeClass("present")
                        $(this).addClass("future")
                    }
                })
    }
    updateHour()

    var remainingSeconds = 10;

    // checking for hour every 10 seconds
    function time() {
        setInterval(function() {
            remainingSeconds--;

            if (remainingSeconds === 0) {
                updateHour();
                remainingSeconds = 10;
            }
        }, 1000)
    }
    time()
    
})
