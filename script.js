$(document).ready(function() {
    
    
    function displayTime() {
        var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").html(currentTime) 
        setTimeout(displayTime, 1000);
    }
    displayTime() 
    
    var userInput = [] 

    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val(); //value in the description text area, setting that to a var
        var time = $(this).parent().attr("id"); //id value of the parent div
        var dateAdded = moment().format("dddd, MMMM Do"); // value of the time
        //pushing all that info to an array
        userInput.push({description: value, time: time, date: dateAdded});
        
        //setting array and stringifying it to local storage        
        localStorage.setItem("userInput", JSON.stringify(userInput));
        
    });
    //getting the info from local storage and destringifying it? 
    var storedInput = JSON.parse(localStorage.getItem("userInput"));

    if (storedInput !== null) {
        userInput = storedInput;
    }

    // looping through userInput array to set text onto page
    for(var i = 0; i < userInput.length; i++) {
        var userDescription = userInput[i].description; //grabbing the description of eacher userInput
        $("#" + userInput[i].time).children(".description").text(userDescription);
        //grabbing the #id of time, 
        // example: $(#hour-10) - you need the # to grab that id 
        // selecting children of that hour id, selecting .description from the children
        //changing the text of the description to userDescription
      }

    function updateHour() {
        var currentHour = moment().hours()
        
            $(".time-block").each(function() {

            var rowHour = parseInt($(this).attr("id").split("-")[1]);

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

    //keeping calendar updated
    var remainingSeconds = 10;

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
